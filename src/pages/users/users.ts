import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user.model';
import { GithubUsersProvider } from '../../providers/github-users/github-users';
import { UserDetailsPage } from './user-details/user-details';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  clients: any;
  originalUsers: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private guProvider: GithubUsersProvider) 
  {
    this.guProvider.getClients()
      .subscribe(response  => { 
        this.clients = response.pageItems ;  
        this.originalUsers = response.pageItems;
      })
  }
  
  goToDetails(clients: any) {
    this.navCtrl.push(UserDetailsPage, {clients});
  }

  search(searchEvent) {
    let term = searchEvent.target.value
    if (term.trim() === '' || term.trim().length < 3) {
      this.clients = this.originalUsers;
    } else {
      this.guProvider.searchClients(term)
        .subscribe(response => {
          this.clients = response;
      });
    }
  }

}
