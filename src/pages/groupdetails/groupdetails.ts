import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GroupReposProvider } from '../../providers/group-repos/group-repos';

/**
 * Generated class for the GroupdetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-groupdetails',
  templateUrl: 'groupdetails.html',
})
export class GroupdetailsPage {
  groupId:number;
  groupdeatis:any;
  centerdetailsLoaded:boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public  groupservice: GroupReposProvider) {
    this.groupId =navParams.get('groupId');
      this.groupservice.getGroupsDetails(this.groupId)
      .subscribe(response => { 
        this.groupdeatis = response;  
        alert(JSON.stringify(this.groupdeatis));
        this.centerdetailsLoaded=true;
        
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupdetailsPage');
  }

}
