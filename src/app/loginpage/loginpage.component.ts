import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  login: Login = new Login;

  constructor(private http: HttpClient, private router: Router, private pservice: ServiceService) { }


  ngOnInit() {


    // localStorage.setItem("name","anar")

  }

  submit() {
    



    alert("login")
 
    this.router.navigate[('products')]
    // sessionStorage.setItem("login",stringify("yes"));
    //localStorage.setItem("name",this.psw)  
    this.pservice.getCartIdByUserID(2)
      .subscribe((data: { cartId: number, userId: string }) => {
        this.getCartItemListByCartId(data.cartId);
      })
  }

  getCartItemListByCartId(cartId: number) {
    this.pservice.getCartItemListByCartId(cartId)
      .subscribe((data) => {
        if (data) {
          localStorage.setItem("usercart", JSON.stringify(data));
        }
        //redirect to home
      })
  }
}
export class Login {
  uname: string;
  psw: string;
}
