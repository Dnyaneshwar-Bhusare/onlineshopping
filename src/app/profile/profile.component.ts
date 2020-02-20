import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id:string;
  UserList;

  constructor(private http : HttpClient, private prservice : ServiceService) { }

  ngOnInit() {
    
   this.id=localStorage.getItem("id");
    this.prservice.getUserList().subscribe((data) => {
      this.UserList = data[this.id];

      console.log(this.id);
  })
}
}
