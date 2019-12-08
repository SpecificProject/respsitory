import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { GithubOrgsProvider } from '../../providers/github-orgs/github-orgs';


/**
 * Generated class for the CenterdetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-centerdetails',
  templateUrl: 'centerdetails.html',
  styles:['centerdetails.scss']
})
export class CenterdetailsPage {
 
  /* ngOnInit(): void {
             this.showLoading()

 

     this.centerservice.getCentersDetails(this.centerId)
      .subscribe(response => { 
        this.centerdeatis = response;  
        alert(JSON.stringify(this.centerdeatis));
        this.centerdetailsLoaded=true;
        
      })

         this.centerservice.getCenterDetailsSummary(this.centerId)
      .subscribe(centerdetailsSummaryResponse => { 
        this.centerdetailsSummary = centerdetailsSummaryResponse;  
        alert(JSON.stringify(this.centerdetailsSummary));
         this.centergroupdetailsloaded=true;
        
      })
         this.centerservice.getCenterGroupSummaryDetails(this.centerId)
      .subscribe(centerGroupDetailsresponse => { 
        this.centergroupSummaryDetails = centerGroupDetailsresponse;  
        alert(JSON.stringify(this.centergroupSummaryDetails));
        this.centersummarydetailsLoaded=true;
        
      })
  } */
  centerId:number;
  centerdeatis:any;
  centerdetailsSummary:any;
  centergroupSummaryDetails:any;
  collectionMeetingCalendar:any;
  loading: Loading;
  centerdetailsLoaded :boolean=false;
  centergroupdetailsloaded:boolean=false;
  centersummarydetailsLoaded:boolean=false;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public  centerservice: GithubOrgsProvider,private loadingCtrl: LoadingController) {

    this.centerId =navParams.get('centerId');
      this.centerservice.getCentersDetails(this.centerId)
      .subscribe(response => { 
        this.centerdeatis = response;  
        alert(JSON.stringify(this.centerdeatis));
        this.centerdetailsLoaded=true;
        
      })

         this.centerservice.getCenterDetailsSummary(this.centerId)
      .subscribe(centerdetailsSummaryResponse => { 
        this.centerdetailsSummary = centerdetailsSummaryResponse[0];  
        this.collectionMeetingCalendar=this.centerdetailsSummary.collectionMeetingCalendar;
        alert(JSON.stringify(this.centerdetailsSummary));
         this.centergroupdetailsloaded=true;
        
      })
         this.centerservice.getCenterGroupSummaryDetails(this.centerId)
      .subscribe(centerGroupDetailsresponse => { 
        this.centergroupSummaryDetails = centerGroupDetailsresponse;  
        alert(JSON.stringify(this.centergroupSummaryDetails));
        this.centersummarydetailsLoaded=true;
        
      })

      if(this.centerdetailsLoaded && this.centergroupdetailsloaded && this.centersummarydetailsLoaded){
        this.loading.dismiss();
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CenterdetailsPage');
  }
   
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }
}
