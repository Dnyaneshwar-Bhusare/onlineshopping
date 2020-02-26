import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';
import { OrderDetail, OrderItem } from '../orderDetail';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  ProductList;
  categoryList;
  searchText:string;
  constructor(private http:HttpClient, private catservice:ServiceService) { }

  ngOnInit() {

    this.catservice.getProductList().subscribe((data) => {
      this.productList = data;
      console.log(data)
    })

    this.catservice.getCategoryList().subscribe((data) =>{
<<<<<<< HEAD
   this.categoryList=data;
  
    console.log(data);
    })
  }
  selectCategory(categoryName:string){
    console.log(categoryName);
    this.searchText=categoryName;
  }
}
=======
    this.categoryList=data;
  
    console.log(data);
    })

 

  }
  secectCategory(categoryName:string){
    console.log(categoryName)
    this.searchText=categoryName;
    
  }

  buyProduct(productId:number){
    this.catservice.getProduct(productId).subscribe((data) =>{
      this.productData=data;
    
      console.log(this.productData.price);
    
    console.log("product delevered")
    console.log(productId)
    console.log(this.productData)
    this.getProduct(productId);
    //this.orderDetail.userId = JSON.parse(localStorage.getItem("logged"));
   this.orderDetail.userId = 4;
    this.orderDetail.orderedDate = "2020-06-15";//remaining
    this.orderDetail.expectedDeliveryDate = "2020-07-13";//remaining
     this.orderDetail.price = this.productData.price;
    this.orderDetail.orderStatus = "Confirmed bhai";
    console.log(productId)
    this.orderItem.productId=productId;
    this.orderItem.quantity=1;
    var arr: OrderItem[] = [
      { "productId": productId, "quantity": 1 },
       ];
    this.orderDetail.orderItem=this.orderItem;
    console.log(JSON.stringify(this.orderDetail));
    //this.orderDetail.orderItem.orderId=1;//remaining
    this.catservice.getOrderDetail(this.orderDetail).subscribe(order =>{
      this.orderList = order;
     console.log("success");
    })
     })
    }
    getProduct(productId:number){
  

    }
  }


>>>>>>> b51b18c2d74b3db36c91aff92b59daaa28e3dd05
