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
    this.prservice.getCartIdByUserID(2)
      .subscribe((data:{cartId:number, userId:string}) => {
        this.userData = data;
        this.getCartItemListByCartId(data.cartId);

      })
  }

  getCartItemListByCartId(cartId: number) {
    this.prservice.getCartItemListByCartId(cartId)
      .subscribe((data) => {
        this.cartItem = data;
        console.log(data)

        this.getProduct(JSON.parse(this.cartItem[0].productId))
      })
  }
  getProduct(prductid: number) {
    this.prservice.getProduct(2).subscribe((data) => {
      this.productData = data;
      console.log(data)
    })
  }
}

