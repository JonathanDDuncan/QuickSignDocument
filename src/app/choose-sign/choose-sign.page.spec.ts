import { PipesModule } from './../pipes/pipes.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseSignPage } from './choose-sign.page';

describe('ChooseSignPage', () => {
  let component: ChooseSignPage;
  let fixture: ComponentFixture<ChooseSignPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseSignPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [PipesModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseSignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
