import { Component, OnInit } from '@angular/core';
import { FrindServiceService } from 'src/app/service/frind-service.service';

@Component({
  selector: 'app-local-service',
  templateUrl: './local-service.component.html',
  styleUrls: ['./local-service.component.css']
})
export class LocalServiceComponent implements OnInit {
  welcomeMessage="";
  cabServiceName=""
  vender = []
  constructor(private ls:FrindServiceService) { }

  ngOnInit() {
    console.log(this.ls.sayHello())
    console.log(this.ls.cabService)
    this.vender = this.ls.cabService;
    
  }
  addCabService = function(){
  this.ls.cabService.push(this.cabServiceName)

  }

}
