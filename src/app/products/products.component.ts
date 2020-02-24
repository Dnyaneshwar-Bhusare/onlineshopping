import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ServiceService } from './../service.service';
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
    this.prservice.getProductList()
    .subscribe((data) => {
      this.ProductList = data;
      console.log(data)
    })
    
  }
  addToCart(id: number) {
    let cartItems:{productId:number, quantity:number, userId:number}[] = JSON.parse(localStorage.getItem("usercart"));
    if(cartItems)
    {
      let item = cartItems.find(p=>p.productId===id);
      if(item){
        item.quantity++;
      }else{
        item={productId:id, quantity:1, userId:2}
        cartItems.push(item);
      }
    }else{
      //create a new cart
      let item ={productId:id, quantity:1, userId:2}
      cartItems=[item];
    }
    localStorage.setItem("usercart", JSON.stringify(cartItems));
    //save to server


    // this.alreadyExist = false;
    // if (this.cartItems == null) {
    //   this.cartItems.push(id)
    //   console.log(this.cartItems);
    //   alert("Product added to cart");
    // }
    // else {
    //   for (var cartItem of this.cartItems) {
    //     if (cartItem == id) {
    //       this.alreadyExist = true;
    //       alert("This Product is already exist in the cart.")
    //     }
    //   }
    //   if (this.alreadyExist == false) {
    //     this.cartItems.push(id)
    //     console.log(this.cartItems);
    //     alert("Product added to cart");
    //     sessionStorage.setItem("cartItems",JSON.stringify(this.cartItems));
    //   }
    //}
  }

}
