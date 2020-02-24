import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  ProductList;
  CategoryList;
  constructor(private http:HttpClient, private catservice:ServiceService) { }

  ngOnInit() {

    this.catservice.getProductList().subscribe((data) => {
      this.ProductList = data;
      console.log(data)
    })

    this.catservice.getCategoryList().subscribe((data) =>{
   this.CategoryList=data;
  
    console.log(data);
    })
  }
  categoryId(catId:number){

    
  }

}
