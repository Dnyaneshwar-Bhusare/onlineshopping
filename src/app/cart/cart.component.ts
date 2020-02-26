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
    this.cartItem = JSON.parse(localStorage.getItem("usercart"));
    this.products.push();
    for (let p of this.cartItem) {
    }
  }

  disable(){
    
  }
}

