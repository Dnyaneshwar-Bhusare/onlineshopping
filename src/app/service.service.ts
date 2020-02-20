import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  //private urlProductList = "http://localhost:8989/Product_Details/productList";
  
  private urlProductList = "http://localhost:8989/OnlineShoppingRest/productList";
  
  constructor(private http: HttpClient) { }

  getProductList(){
    return this.http.get(this.urlProductList);
  }
}
