import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  login : Login = new Login;

  constructor(private http : HttpClient,private router : Router,private service : ServiceService) { }
  
submit() {



  
  localStorage.setItem("id","1")  
//localStorage.setItem("name",this.psw)  
}

  ngOnInit() {
      

   // localStorage.setItem("name","anar")
    
  }
}
export class Login{
  uname:string;
  psw:string;
}