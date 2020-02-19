import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  {path:'',component:ProductsComponent},
  {path :'header',component:HeaderComponent},
  {path :'products',component:ProductsComponent},
  {path :'login',component:LoginpageComponent},
  {path :'cart',component:CartComponent},
  {path :'wishlist',component:WishlistComponent},
  {path :'signup',component:SignupComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
