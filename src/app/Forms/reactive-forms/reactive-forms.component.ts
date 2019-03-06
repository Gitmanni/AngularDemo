import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  rHobbyFrom
  constructor() { }
addHobby =function(hf)
{
console.log("Hobby captured!!"+hf)
console.log(hf)
}
  ngOnInit() {
  
  this.rHobbyFrom= new FormGroup({

    fname:new FormControl("", Validators.compose([ Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z]+$')])),
    sname:new FormControl("",this.lastNameValidater),
    hobby:new FormControl(),
  })
  }
  lastNameValidater = function(control){
   
    if(control.value.langth < 4){
      return {'sname':false}
    }
  }
}
