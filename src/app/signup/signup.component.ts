import { Component, OnInit } from '@angular/core';
import {SignupPage} from './signup';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 signUp : SignupPage= new SignupPage();

  constructor(private http : HttpClient,private router : Router, private service : ServiceService) {}

  ngOnInit() {
  }
  onSignup(signup : NgForm){
    this.service.getSignUpData(this.signUp).subscribe(data => {
      alert("Thanks! your account has been successfully created.");
      this.router.navigate[('/login')]
    });
    
  }
}
 