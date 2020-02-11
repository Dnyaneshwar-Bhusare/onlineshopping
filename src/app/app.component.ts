import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <app-header></app-header>
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content"> 
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'suprajaonlinewebsite';
}
