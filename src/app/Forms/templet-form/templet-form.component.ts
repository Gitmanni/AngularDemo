import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templet-form',
  templateUrl: './templet-form.component.html',
  styleUrls: ['./templet-form.component.css']
})
export class TempletFormComponent implements OnInit {
  addHobby=function(hf)
  {
  console.log("Hobby captured!!"+hf)
  console.log(hf)
  }

  constructor() { }

  ngOnInit() {
  }

}
