import {
  Input,
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NormalizationService } from '../normalization.service';
@Component({
  selector: 'app-choose-sign',
  templateUrl: './choose-sign.page.html',
  styleUrls: ['./choose-sign.page.scss']
})
export class ChooseSignPage implements OnInit, AfterViewInit {
  @Input() entrys: any[];
  @Input() searchword: string;
  @ViewChild('emailRef', { read: ElementRef }) emailRef: ElementRef;
  private selectedkey: string;
  private entrylist: any[];
  public elements: { sign: SafeHtml; key: string }[];
  constructor(
    navParams: NavParams,
    public modalController: ModalController,
    private sanitizer: DomSanitizer,
    private normalize: NormalizationService
  ) {
    // componentProps can also be accessed at construction time using NavParams
  }

  ngOnInit() {
    this.elements = [];
    console.log(this.entrys);
    console.log(this.searchword);
    this.emailRef.nativeElement.value = this.searchword;
    const result = this.search(this.searchword);
    console.log(result);
    this.showResult(result);
  }

  ngAfterViewInit() {
    fromEvent(this.emailRef.nativeElement, 'keyup')
      .pipe(
        // get value
        map((evt: any) => evt.target.value),
        // text length must be > 2 chars
        // .filter(res => res.length > 2)
        // emit after 1s of silence
        debounceTime(100),
        // emit only if data changes since the last emit
        distinctUntilChanged()
      )
      // subscription
      .subscribe((text: string) => {
        const result = this.search(text);
        console.log(result);
        this.showResult(result);
      });
  }
  accept() {
    this.modalController.dismiss({
      result: this.selectedkey
    });
  }

  cancel() {
    this.modalController.dismiss({
      result: 'cancel'
    });
  }

  radioChecked(key: string) {
    this.selectedkey = key;
    console.log(this.selectedkey);
  }

  showResult(result) {
    this.elements = [];
    result.forEach(entry => {
      this.elements.push({
        sign: this.sanitize(
          '<div style="min-width:100px;">' +
            ssw.svg(entry.fsw) +
            '</div>' +
            '<span">' +
            entry.gloss +
            '</span>'
        ),
        key: entry.key
      });
    });
  }

  search(text: string) {
    const max = 25;
    const result = [];
    let count = 0;
    const searchtext = this.normalize.normalizeForSearch(text.trim());
    for (let i = 0; i < this.entrylist.length; i++) {
      const entry = this.entrylist[i];

      if (searchtext.length > 2) {
        if (entry.index.includes(searchtext)) {
          result.push(entry);
          count++;
        }
      } else if (searchtext.length > 0) {
        if (entry.index === searchtext) {
          result.push(entry);
          count++;
        }
      }
      // limit to max entries
      if (count >= max) {
        break;
      }
    }

    return this.arrayUnique(result);
  }

  arrayUnique(arr: any[]) {
    const existingkeys = [];
    const keep = [];
    arr.forEach(element => {
      if (!existingkeys.includes(element.key)) {
        existingkeys.push(element.key);
        keep.push(element);
      }
    });
    return keep;
  }

  sanitize(content: string) {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
