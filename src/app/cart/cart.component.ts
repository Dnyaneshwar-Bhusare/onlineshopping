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

  product;
  cartItems;
  constructor(private http: HttpClient, private prservice: ServiceService) { }

  ngOnInit() {
  
   this.cartItems=sessionStorage.getItem("cartItems");
    for(var cart of this.cartItems){
      
    console.log()
    this.prservice.getProduct(cart).subscribe((data) => {
      this.product= data;
      console.log(data)
    })
  }
  
  }
  

}
