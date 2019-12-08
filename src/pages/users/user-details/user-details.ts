import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from '../../../models/user.model';
import { GithubUsersProvider } from '../../../providers/github-users/github-users';

@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
})
export class UserDetailsPage {
  user: any;
  login: number;
  savingsAccounts:any;
  loanAccounts:any;
  partialLoans:any;
  cbChecks:any;
  group:any;
  recurringsAccounts:any;
  isShowloansegment:boolean =false;
  isShowSavingsSegment :boolean=false;
  isShowRecurringSegement :boolean=false;
  isShowPartialLoanSegment :boolean=false;
  isShowCbCheckSegment :boolean=false;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private guProvider: GithubUsersProvider) 
  {
    this.user = navParams.get('clients');
    this.login=this.user.id;
   // this.group=this.user.groups[0];
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailsPage');
  }  
  expandLoanButtonlick(){
     this.isShowloansegment=!this.isShowloansegment;
     this.isShowSavingsSegment =false;
     this.isShowRecurringSegement =false;
     this.isShowPartialLoanSegment =false;
     this.isShowCbCheckSegment =false;
      this.guProvider.getAccountsDetails(this.login)
      .subscribe(
        response => { this.loanAccounts = response.loanAccounts; })
  }
  expandSavingsButtonlick(){
     this.isShowSavingsSegment=!this.isShowSavingsSegment;
     this.isShowloansegment =false;
     this.isShowRecurringSegement =false;
     this.isShowPartialLoanSegment =false;
     this.isShowCbCheckSegment =false;
      this.guProvider.getAccountsDetails(this.login)
      .subscribe(
        response => { this.savingsAccounts = response.savingsAccounts; })

  }
  expandRecurringButtonlick(){
     this.isShowRecurringSegement=!this.isShowRecurringSegement;
     this.isShowloansegment =false;
     this.isShowSavingsSegment =false;
     this.isShowPartialLoanSegment =false;
     this.isShowCbCheckSegment =false;
      this.guProvider.getAccountsDetails(this.login)
      .subscribe(
        response => { this.recurringsAccounts = response; })
  }
  expandPartialLoanButtonlick(){
     this.isShowPartialLoanSegment=!this.isShowPartialLoanSegment;
     this.isShowloansegment =false;
     this.isShowSavingsSegment=false;
     this.isShowRecurringSegement =false;
     this.isShowCbCheckSegment=false;
      this.guProvider.getPartialLoanDetails(this.login)
      .subscribe(
        response => { this.partialLoans = response; })
  }
  expandCbCheckButtonlick(){
     this.isShowCbCheckSegment=!this.isShowCbCheckSegment;
     this.isShowloansegment =false;
     this.isShowSavingsSegment =false;
     this.isShowRecurringSegement =false;
     this.isShowPartialLoanSegment =false;
      this.guProvider.getCBDetailsDetails(this.login)
      .subscribe(
        response => { this.cbChecks = response; })

  }

}
