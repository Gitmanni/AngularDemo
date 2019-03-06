import { Component, OnInit } from '@angular/core';
import { FrindServiceService } from 'src/app/service/frind-service.service';

@Component({
  selector: 'app-consume-service',
  templateUrl: './consume-service.component.html',
  styleUrls: ['./consume-service.component.css']
})
export class ConsumeServiceComponent implements OnInit {
  vender = []
  constructor(private ls:FrindServiceService) { }

  ngOnInit() {
    this.vender= this.ls.cabService
    this.ls.cabService.push("Local");
  }

}
