import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ServiceService } from './../service.service';
import { stringify } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  deptId: String;
  cartItems: any = [];
  counter: number;
  alreadyExist: boolean;
  i: number;
  productList;
  constructor(private http: HttpClient, private prservice: ServiceService,private router: Router) { }
  //name:any;
  ngOnInit() {
    //  this.getDeptList();
    this.prservice.getProductList()
      .subscribe((data) => {
        this.productList = data;
        console.log(data)
      })

  }
  addToCart(id: number) {
    let cartItems: { productId: number, quantity: number, userId: number }[] = JSON.parse(localStorage.getItem("usercart"));
    if (cartItems) {
      let item = cartItems.find(p => p.productId === id);
      if (item) {
        item.quantity++;
      } else {
        item = { productId: id, quantity: 1, userId: 2 }
        cartItems.push(item);
      }
    } else {
      //create a new cart
      let item = { productId: id, quantity: 1, userId: 2 }
      cartItems = [item];
    }
    localStorage.setItem("usercart", JSON.stringify(cartItems));
  }
  callViewByCategory(){
    this.router.navigate(['/category'])

  }

}
