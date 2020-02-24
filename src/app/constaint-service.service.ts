import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstaintServiceService {

  API_ENDPOINT :String;
CONSUMER_KEY : String;
  constructor() { 
    this.API_ENDPOINT = 'http://192.168.14.87:8989/OnlineShopping';
  }
}





