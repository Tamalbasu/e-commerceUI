import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(email:string,password:string): Observable<any> {
    const formData: any = {}
    formData["email"]= email;
    formData["password"]= password;
    console.log(formData);
    const headers = new HttpHeaders();
  
    headers.append('Access-Control-Allow-Origin', '*');
     headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
      headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    return this.http.post<any>('http://localhost:8080/login',formData);
  }

  register(email:string,username:string,password:string,age:string): Observable<any> {
    const formData: any = {};
    formData["email"]= email;
    formData["password"]= password;
    formData["age"]=age;
    formData["username"] =username;
    console.log(formData);
    return this.http.post<any>('http://localhost:8080/registration',formData);
  }
}
