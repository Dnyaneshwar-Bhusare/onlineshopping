import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
login:string;
  constructor() { }

  ngOnInit() {
    
   this.login=sessionStorage.getItem("login");
   
    
  }

}
