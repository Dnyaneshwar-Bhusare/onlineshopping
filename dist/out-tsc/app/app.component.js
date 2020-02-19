import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'suprajaonlinewebsite';
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        template: `
   <app-header></app-header>
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content"> 
    <router-outlet></router-outlet>
  `,
        styles: []
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map