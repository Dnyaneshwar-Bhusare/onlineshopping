import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignupPage, User } from './signup/signup';
import { Login } from './loginpage/loginpage.component';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  user : User = new User;
 // private urlProductList = "http://localhost:8989/Product_Details/productList";
 

 // private urlProductList = "http://localhost:8989/OnlineShopping/productList";
  // private urlProductList = "http://192.168.14.86:8989/OnlineShoppingRest/productList";
     private urlProductList = "http://192.168.14.87:8989/OnlineShopping/productList";
//   private urlProductList = "http://192.168.14.87:8989/OnlineShoppingRest/productList";

  private urlUserList = "http://localhost:8989/OnlineShopping/UserList";

  private urlSignUpData = "http://192.168.14.87:8989/Loginn/signup";

  //private urlUserList = "http://localhost:8989/OnlineShopping/UserList";

  private urlCategoryList = "http://192.168.14.87:8989/OnlineShopping/CategoryList";
  private urlLoginData = "http://localhost:8989/Loginn/login";

 // private urlUserList = "http://192.168.14.87:8989/OnlineShopping/UserList";
  private urlProduct = "http://localhost:8989/OnlineShopping/fetchProduct";
  constructor(private http: HttpClient) { }

  getProductList(){
    return this.http.get(this.urlProductList);
  }

  getUserList(){
    return this.http.get(this.urlUserList);
  }

  getCategoryList(){
    return this.http.get(this.urlCategoryList);
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
  getProduct(productId:number){
    
    
    return this.http.put(this.urlProduct,productId);

  }
}
