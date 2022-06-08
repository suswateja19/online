import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse} from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = 'http://localhost:8085/obs/api/customers';

 

  constructor(private http:HttpClient) { }

  getCustomersList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
  login(customer:any):Observable<any>
  {

    return this.http.post('http://localhost:8085/obs/api/customer',customer);
  }
/*
  admin(admin:any):Observable<any>
  {
    return this.http.post('http://localhost:8085/obs/api/admin',admin);
  }
*/
  saveCustomer(customer: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`,customer)
  }

  


  isUserLoggedIn() {
    let user = sessionStorage.getItem('email')
    console.log(!(user === null))
    return !(user === null)
  }
 
  logOut() {
    sessionStorage.removeItem('email')
  }
  
  baseurl1='http://localhost:8085/obs/api/customerbyemail';

getCustomer(email:string):Observable<any>{
  return this.http.get(`${this.baseurl1}/${email}`);
}

}
