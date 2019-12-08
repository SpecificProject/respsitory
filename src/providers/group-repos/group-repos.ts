import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/catch';

@Injectable()
export class GroupReposProvider {
  headers: HttpHeaders;  
  header: any;

  baseUrl = 'https://13.126.176.230/mifosng-provider/api/v1';

  constructor(public http: HttpClient) {   
    this.headers = new HttpHeaders({'Accept': 'application/json, text/plain, */*','X-Mifos-Platform-TenantId': 'nirantara',
                                     'Authorization': 'Basic YWRtaW46bmV0d29ya0AxMjM0NQ=='
 });
    this.header = ({ headers: this.headers });
  }
  
  getGroups(): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/groups`, this.header)
      .catch(this.handleError);
  }  

   getGroupsDetails(groupId:number): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/groups/${groupId}`, this.header)
      .catch(this.handleError);
  } 
  
  searchGroups(searchParam: string): Observable<any> {
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
