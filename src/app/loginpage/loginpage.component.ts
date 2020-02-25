import { Component, OnInit, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__ } from '@angular/core';
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
  login: LoginUser = new LoginUser();
  cartproducts: [];

  constructor(private http: HttpClient, private router: Router, private pservice: ServiceService) { }
  ngOnInit() {
    // localStorage.setItem("name","anar")
  }
  submit(email: string, password: string) {
    {
      this.login.email = email;
      this.login.password = password;
    }
    this.pservice.getLoginData(this.login).subscribe((data) => {
      console.log(data);
      if (data != 0) {
        sessionStorage.setItem("logged", JSON.stringify(data[0].uid));
        this.pservice.getCartListByUserId(data[0].uid)
          .subscribe((data) => {
            if (data) {
              console.log(data);

              localStorage.setItem("usercart", JSON.stringify(data));
            }
            this.router.navigate(['/products'])
            //  location.reload();
          })
        this.router.navigate[('products')]

      }
      else {
        alert("Enter Correct Details..!!!")
      }
    })


  }
  getCartListByUserId(userId: number) {
  }
}
export class LoginUser {
  email: string;
  password: string;
}
