import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  userData;
  cartItem;
  productData;
  cartId: any;
  products: [];
  constructor(private http: HttpClient, private prservice: ServiceService) { }

  ngOnInit() {
  // this.cartItem=JSON.parse(localStorage.getItem("usercart")); 
//    for(let product of this.cartItem.length){
// console.log(1);
//   //  this.products.push(this.cartItem[product].productId)
//    }
    this.cartItem = (localStorage.getItem("usercart"));
    for (let p of this.cartItem)
    {
      console.log(p)
    }
   console.log(this.cartItem);
  console.log(this.cartItem.length);
  }

}

