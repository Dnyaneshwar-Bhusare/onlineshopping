import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private urlProductList = "http://localhost:8989/OnlineShopping/productList";
  // private urlProductList = "http://192.168.14.86:8989/OnlineShoppingRest/productList";

  private urlUserList = "http://localhost:8989/OnlineShopping/UserList";
  constructor(private http: HttpClient) { }

  getProductList(){
    return this.http.get(this.urlProductList);
  }

  getUserList(){
    return this.http.get(this.urlUserList);
  }
}
