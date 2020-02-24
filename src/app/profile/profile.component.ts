import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id:string;
  UserList;

  constructor(private http : HttpClient, private prservice : ServiceService,private router : Router) { }

  ngOnInit() {
    
   this.id=localStorage.getItem("id");
    this.prservice.getUserList().subscribe((data) => {
      this.UserList = data[this.id];

      console.log(this.UserList);
  })
}
logout(){
  alert("logout")
  sessionStorage.removeItem("login")
  this.router.navigate[('products')]
}
}
