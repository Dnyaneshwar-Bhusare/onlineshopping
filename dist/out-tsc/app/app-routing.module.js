import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { SignupComponent } from './signup/signup.component';
const routes = [
    { path: '', component: ProductsComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'login', component: LoginpageComponent },
    { path: 'cart', component: CartComponent },
    { path: 'wishlist', component: WishlistComponent },
    { path: 'signup', component: SignupComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map