import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ServiceService } from './../service.service';
import { exists } from 'fs';
import { stringify } from '@angular/compiler/src/util';

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
  ProductList;
  constructor(private http: HttpClient, private prservice: ServiceService) { }
  //name:any;
  ngOnInit() {
    //  this.getDeptList();
    this.prservice.getProductList().subscribe((data) => {
      this.ProductList = data;
      console.log(data)
    })
  }
  addToCart(id: number) {
    this.alreadyExist = false;
    if (this.cartItems == null) {
      this.cartItems.push(id)
      console.log(this.cartItems);
      alert("Product added to cart");
    }
    else {
      for (var cartItem of this.cartItems) {
        if (cartItem == id) {
          this.alreadyExist = true;
          alert("This Product is already exist in the cart.")
        }
      }
      if (this.alreadyExist == false) {
        this.cartItems.push(id)
        console.log(this.cartItems);
        alert("Product added to cart");
        sessionStorage.setItem("cartItems",stringify(this.cartItems));
      }
    }
  }

}
