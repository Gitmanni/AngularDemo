import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestAPIService } from 'src/app/Services/rest-api.service';


@Component({
  selector: 'app-viewuser-detail',
  templateUrl: './viewuser-detail.component.html',
  styleUrls: ['./viewuser-detail.component.css']
})
export class ViewuserDetailComponent implements OnInit {
viewSelectedUser:any
selectedUserId:any
  constructor(private active:ActivatedRoute,private rest:RestAPIService) { }

  ngOnInit() {
    console.log(this.active);
    console.log(this.active.snapshot);
    console.log(this.active.snapshot.paramMap);
    console.log(this.active.snapshot.paramMap.get("muid"));
    this.selectedUserId=this.active.snapshot.paramMap.get("muid");   
    this.rest.getUserdata(this.selectedUserId).subscribe((user=>{this.viewSelectedUser=user})) 
    
  }

}
