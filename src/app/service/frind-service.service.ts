import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrindServiceService {
 cabService=['ola','uber','zoom']

 sayHello(){
   return "Welcome to CAB Service API"
 }
 welcome(){  
  console.log("Welcome to CAN Service")
 }
  constructor() { }
}
