import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';

 
export class User {
  name: string;
  email: string;
  headers: HttpHeaders;  
  header: any;

  baseUrl = 'https://13.126.176.230/mifosng-provider/api/v1';

  constructor(name: string, email: string,public http: HttpClient) {   
    this.headers = new HttpHeaders({ 'Content-Type': 'application/vnd.github.v3+json', 'Accept': 'application/json, text/plain, */*','X-Mifos-Platform-TenantId': 'nirantara'
 });
    this.header = ({ headers: this.headers });
  }
}
@Injectable()
export class AuthService {
  currentUser: User;
  headers: HttpHeaders; 
  header: any;

  baseUrl = 'https://13.126.176.230/mifosng-provider/api/v1/';

  constructor(public http: HttpClient) {   
    this.headers = new HttpHeaders({ 'Content-Type': 'application/vnd.github.v3+json', 'Accept': 'application/json, text/plain, */*','X-Mifos-Platform-TenantId': 'nirantara'
 });
    this.header = ({ headers: this.headers });
  }
  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
		/* return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      }); */
      return this.http
      .post<User>(`${this.baseUrl}`, {})
      .catch(this.handleError);
          }  
  }
 
  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }

   private handleError (error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  } 
 
  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}