import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from '../Model/Books';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  public cartlist: Books[] = [] ;
  constructor(private http: HttpClient) { }

  getBooks(): Observable<any> {
    return this.http.get<any>('https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json');
  }

  getImages(): Observable<any> {
    return this.http.get<any>('https://s3-ap-southeast-1.amazonaws.com/he-public-data/bookimage816b123.json');
  }


  putCart(e: Books): void {
    console.log(e)
    e.quentity=1;
    this.cartlist.push(e);
  }

  getCart(): any {
    return this.cartlist;
  }


  placeOrder(total:number): Observable<any> {
    const formData: any = {};
    formData["amount"]= total;
    
    console.log(formData);
    return this.http.post<any>('http://localhost:8080/placeOrder',formData);  }
}
