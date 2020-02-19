import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let LoginpageComponent = class LoginpageComponent {
    constructor() { }
    submit() {
        console.log(this.name);
        console.log(this.psw);
    }
    ngOnInit() {
    }
};
LoginpageComponent = tslib_1.__decorate([
    Component({
        selector: 'app-loginpage',
        templateUrl: './loginpage.component.html',
        styleUrls: ['./loginpage.component.css']
    })
], LoginpageComponent);
export { LoginpageComponent };
//# sourceMappingURL=loginpage.component.js.map