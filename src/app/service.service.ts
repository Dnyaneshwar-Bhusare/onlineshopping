import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignupPage, User } from './signup/signup';
import { LoginUser } from './loginpage/loginpage.component';

import { ConstaintServiceService } from './constaint-service.service';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 
  user:User=new User();

  

  constructor(private http: HttpClient,public ConstantService:ConstaintServiceService) { }

  private urlLoginData = "/login";

 
  getProductList(){
    return this.http.get(this.ConstantService.API_ENDPOINT+"/productList");
  }

  getUserList(){
    return this.http.get(this.ConstantService.API_ENDPOINT+"/userList")
  }

  getCategoryList(){
    return this.http.get(this.ConstantService.API_ENDPOINT+"/categoryList");
  }
  
  getSignUpData(signup : SignupPage){
    this.user.uname = signup.username;
    this.user.email = signup.email;
    this.user.mblNo = signup.mobno;
    this.user.password = signup.password;
    this.user.addrsid = 1;
     alert(JSON.stringify(this.user));
    return this.http.post(this.ConstantService.API_ENDPOINT+"/signup",this.user)
  }

  getLoginData(login : LoginUser){
    return this.http.post(this.ConstantService.API_ENDPOINT+"/login",login);
  }
  getProduct(productId:number){
    
    
    return this.http.put(this.ConstantService.API_ENDPOINT+"/fetchProduct",productId);

  }
  // get cart from cart details
  getCartListByUserId(userId:number){
    return this.http.put("http://192.168.14.87:8989/OnlineShopping/fetchCartTableByUserId",2)

  }
  //
  // getCartIdByUserID(userId:number){
  //   return this.http.put(this.ConstantService.API_ENDPOINT+"/fetchCartIdByUserId",userId)
  // }
}
