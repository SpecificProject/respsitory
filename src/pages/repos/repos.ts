import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GroupdetailsPage } from '../groupdetails/groupdetails';
import { GroupReposProvider } from '../../providers/group-repos/group-repos';


@Component({
  selector: 'page-repos',
  templateUrl: 'repos.html',
})
export class ReposPage {
  groups: any;
  originalgroups:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private grProvider: GroupReposProvider) 
  {
    this.grProvider.getGroups()
      .subscribe(response => { 
        this.groups = response;  
      })
  }

   goToDetails(groupId: number) {
    this.navCtrl.push(GroupdetailsPage, {groupId});
  }

  search(searchEvent) {
    let term = searchEvent.target.value
    if (term.trim() === '' || term.trim().length < 3) {
    this.groups = this.originalgroups;
    } else {
      this.grProvider.searchGroups(term)
        .subscribe(response => {
          this.groups = response
      });
    }
  }


}
