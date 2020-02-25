import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: number;
  UserData;

  constructor(private http: HttpClient, private prservice: ServiceService, private router: Router) { }

  ngOnInit() {

    // this.id=localStorage.getItem("id");
    this.userId = JSON.parse(sessionStorage.getItem("logged"));
    this.prservice.getUserList().subscribe((data) => {
      console.log(this.userId);
      this.UserData = data[this.userId - 1];

      console.log(this.UserData);
    })
  }
  logout() {
    alert("logout")
    sessionStorage.removeItem("logged");
    localStorage.removeItem("usercart");
    this.router.navigate(['/products'])

  }
}
