import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignupPage, User } from './signup/signup';
import { Login } from './loginpage/loginpage.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  user : User = new User;
  private urlProductList = "http://localhost:8989/Product_Details/productList";
  // private urlProductList = "http://192.168.14.86:8989/OnlineShoppingRest/productList";

  private urlUserList = "http://localhost:8989/onlineshoppin/UserList";

  private urlSignUpData = "http://localhost:8989/Loginn/signup";

  private urlLoginData = "http://localhost:8989/Loginn/login";

  constructor(private http: HttpClient) { }

  getProductList(){
    return this.http.get(this.urlProductList);
  }

  getUserList(){
    return this.http.get(this.urlUserList);
  }
  
  getSignUpData(signup : SignupPage){
    this.user.uname = signup.username;
    this.user.email = signup.email;
    this.user.mblNo = signup.mobno;
    this.user.password = signup.password;
    this.user.addrsid = 1;
     alert(JSON.stringify(this.user));
    return this.http.post(this.urlSignUpData,this.user)
  }

  getLoginData(login : Login){
    return this.http.post(this.urlLoginData,login);
  }
}
