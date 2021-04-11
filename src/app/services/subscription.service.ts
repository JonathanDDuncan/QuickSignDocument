import { Router } from '@angular/router';
import { TrialService } from './trial.service';
import { StorageService } from './../storage.service';
import { Injectable } from '@angular/core';
import { InAppPurchase2, IAPProduct } from '@ionic-native/in-app-purchase-2/ngx';


@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  constructor(
    private storage: StorageService,
    private trialService: TrialService,
    private router: Router,
    private store: InAppPurchase2
  ) { }

  async GetSubscriptionEndDate(email: string): Promise<Date> {
    const subscription = await this.storage.GetSubscription(email);
    let subscriptionEndDate: Date;
    if (subscription) {
      subscriptionEndDate  = subscription.endDate;
    }
    return subscriptionEndDate;
  }

  async GetSubscriptionDaysLeft(email: string): Promise<number> {
    const subscriptionEndDate: Date = await this.GetSubscriptionEndDate(email);
    const diff = Math.abs(new Date(subscriptionEndDate).getTime() - new Date().getTime());
    const daysLeft: number = Math.ceil(diff / (1000 * 3600 * 24));

    return (daysLeft > 0) ? daysLeft : 0;
  }

  async CanUse(email: string = null) {

    const owned = (this.verifyAppleSubscription("monthly") || this.verifyAppleSubscription("yearly"));
    
    // TODO what is this for?
   if (!email) {
     const profile = await this.storage.GetCurrentUserProfile();
     email = profile && profile !== null ? profile.email : null;
   }

   const isSubscribedOrTrial = this.IsSubscribedOrTrial(email);
    if (!isSubscribedOrTrial && !owned ) {
      this.router.navigate(['/subscribe']);
    }
  }

  async IsSubscribedOrTrial (email: string): Promise<boolean> {
    const isTrial = await this.trialService.GetTrialDaysLeft(email) > 0;
    const isSubscribed = await this.GetSubscriptionDaysLeft(email) > 0;

    const isSubscribedOrTrial = isTrial || isSubscribed;

   return isSubscribed;
  }

  async  verifyAppleSubscription(productId: string){

    // const profile = await this.storage.GetCurrentUserProfile();
    // if (!profile || profile === null) {
    //   this.router.navigate(['/login']);
    // }

    // const subscription = await this.storage.GetSubscription(profile.email);
    // let subscriptionEndDate: Date = new Date();
    // if (subscription) {
    //   subscriptionEndDate = subscription.endDate;
    // }

    console.log('Starting Configurations');

    try {
      // Register Product
      console.log('Registering Product ' + JSON.stringify(productId));
      this.store.verbosity = this.store.DEBUG;


      //Handler
      this.store.when("my_subcription").updated((product: IAPProduct) => {
        if (product.owned) { return true}
        // serve the app with subscription
        else {return false }
        // serve the app without subscription
      });

      this.store.register({
        id: productId,
        alias: productId,
        type: this.store.PAID_SUBSCRIPTION
      });    

    } catch (err) {
      console.log('Error On Store Issues' + JSON.stringify(err));
    }
  }
}