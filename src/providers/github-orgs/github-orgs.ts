import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/catch';

@Injectable()
export class GithubOrgsProvider {
  headers: HttpHeaders;  
  header: any;

  baseUrl = 'https://13.126.176.230/mifosng-provider/api/v1';

  constructor(public http: HttpClient) {   
    this.headers = new HttpHeaders({'Accept': 'application/json, text/plain, */*','X-Mifos-Platform-TenantId': 'nirantara',
                                     'Authorization': 'Basic YWRtaW46bmV0d29ya0AxMjM0NQ=='
 });
    this.header = ({ headers: this.headers });
  }
  
  getCenters(): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/centers`, this.header)
      .catch(this.handleError);
  }  
//runreports/GroupSummaryCounts?R_groupId=38948&genericResultSet=false
   getCentersDetails(centerId:number): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/centers/${centerId}`, this.header)
      .catch(this.handleError);
  } 
   getCenterDetailsSummary(centerId:number): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/runreports/GroupSummaryCounts?R_groupId=${centerId}&genericResultSet=false`, this.header)
      .catch(this.handleError);
   }
   
    getCenterGroupSummaryDetails(centerId:number): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/centers/${centerId}?associations=groupMembers,collectionMeetingCalendar`, this.header)
      .catch(this.handleError);
   }

  searchCenters(searchParam: string): Observable<any> {
     return this.http
      .get(`${this.baseUrl}/search?query=${searchParam}&resource=groups`, this.header)
      .catch(this.handleError);
  }
  private handleError (error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}