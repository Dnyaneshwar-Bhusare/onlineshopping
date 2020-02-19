import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SimpleModalModule } from 'ngx-simple-modal';
import { SignupComponent } from './signup/signup.component';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { from } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    LoginpageComponent,
    CartComponent,
    WishlistComponent,
    SignupComponent,
   
  

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
