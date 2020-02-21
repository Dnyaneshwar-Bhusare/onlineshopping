import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
uname:string;
psw:string;



  constructor() { }
  
submit() {



  
  localStorage.setItem("id","1")  
localStorage.setItem("name",this.psw)  
}

  ngOnInit() {
      

   // localStorage.setItem("name","anar")
    
  }
 

}
