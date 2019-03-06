import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
  currentTask=""
  @ViewChild('inputTask') itt:ElementRef
task = [
      "Plan the Weekend!",
      "Plan the Weekend break!",
]
doneTask = []
  
addTask = function(){
 
this.task.push(this.currentTask);

}
changeTaskStatus = function(ct){
  this.doneTask.push(this.task[ct]);
  this.task.splice(ct,1)
}
UndoTaskStatus = function(ct){
  this.task.push(this.doneTask[ct]); 
  this.doneTask.splice(ct,1)
}

  constructor() { }

  ngOnInit() {
  }

}
