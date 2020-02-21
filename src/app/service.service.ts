import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 

 // private urlProductList = "http://localhost:8989/OnlineShopping/productList";
  // private urlProductList = "http://192.168.14.86:8989/OnlineShoppingRest/productList";
     private urlProductList = "http://192.168.14.87:8989/OnlineShopping/productList";
//   private urlProductList = "http://192.168.14.87:8989/OnlineShoppingRest/productList";

  private urlUserList = "http://192.168.14.87:8989/OnlineShopping/UserList";
  private urlProduct = "http://localhost:8989/OnlineShopping/fetchProduct";
  constructor(private http: HttpClient) { }

  getProductList(){
    return this.http.get(this.urlProductList);
  }

  getUserList(){
    return this.http.get(this.urlUserList);
  }
  
  getProduct(productId:number){
    return this.http.put(this.urlProduct,productId);

  }

}
