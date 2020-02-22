import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
name:String;

  constructor() { }

  ngOnInit() {
    
  
    this.name=localStorage.getItem("name");
    if(name=="anar"){
      alert("You have to login First!!!")
    }
    }

}

