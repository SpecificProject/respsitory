import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { GithubOrgsProvider } from '../../providers/github-orgs/github-orgs';
import { CenterdetailsPage } from '../centerdetails/centerdetails';



@Component({
  selector: 'page-organisations',
  templateUrl: 'organisations.html',
})
export class OrganisationsPage {
  centers: any[];
  originalCenters :any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private goProvider: GithubOrgsProvider) 
  {
    this.goProvider.getCenters()
      .subscribe(response => { 
        this.centers = response;  
      })
  }

    goToDetails(centerId: number) {
    this.navCtrl.push(CenterdetailsPage, {centerId});
  }

  search(searchEvent) {
    let term = searchEvent.target.value
    if (term.trim() === '' || term.trim().length < 3) {
    this.centers = this.originalCenters;
    } else {
      this.goProvider.searchCenters(term)
        .subscribe(response => {
          this.centers = response
      });
    }
  }
}
