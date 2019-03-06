import { Component, OnInit } from '@angular/core';
import {RestAPIService} from 'src/app/services/rest-api.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-remote-service',
  templateUrl: './remote-service.component.html',
  styleUrls: ['./remote-service.component.css']
})
export class RemoteServiceComponent implements OnInit {

  constructor(private rest:RestAPIService,private router:Router) { }
  allUsers:any
  ngOnInit() {
    this.rest.getRemoteData().subscribe((res)=>
{
this.allUsers=res
console.log(this.allUsers)
})
}
viewUser = function(index)

{
 
console.log("all user"+index)
console.log("all user"+this.allUsers[index])
//this will be call -http://local---
this.router.navigate(["/viewuser",index])
}

}



 

