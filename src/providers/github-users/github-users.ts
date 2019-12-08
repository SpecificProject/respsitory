import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/catch';

import { User } from '../../models/user.model';

@Injectable()
export class GithubUsersProvider {
  headers: HttpHeaders;  
  header: any;

  baseUrl = 'https://13.126.176.230/mifosng-provider/api/v1';

  constructor(public http: HttpClient) {   
    this.headers = new HttpHeaders({'Accept': 'application/json, text/plain, */*','X-Mifos-Platform-TenantId': 'nirantara',
                                     'Authorization': 'Basic YWRtaW46bmV0d29ya0AxMjM0NQ=='
 });
    this.header = ({ headers: this.headers });
  }

  getClients(): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/clients`, this.header)
      .catch(this.handleError);
  }  

  getClientsDetails(clientId: number): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/clients/${clientId}`, this.header)
      .catch(this.handleError);
  }
  getAccountsDetails(clientId: number): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/clients/${clientId}/accounts`, this.header)
      .catch(this.handleError);
  }

  getPartialLoanDetails(clientId: number): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/clients/${clientId}`, this.header)
      .catch(this.handleError);
  }

  getCBDetailsDetails(clientId: number): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/rblValidation?q${clientId}&clientcbcheck=true&valufor=request`, this.header)
      .catch(this.handleError);
  }

  searchClients(searchParam: string): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/search?query=${searchParam}&resource=clients,clientIdentifiers`, this.header)
      .catch(this.handleError);
  }
  
  private handleError (error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
