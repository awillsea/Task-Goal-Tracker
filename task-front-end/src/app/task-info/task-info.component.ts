import { Component,Input,OnInit,Output,EventEmitter } from '@angular/core';
import { Task } from '../task';
@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.css']
})
export class TaskInfoComponent implements OnInit  {
@Input() taskInfo:Task = {
  id:0,
  title:'',
  description:'',
  start_date:'',
  target_end_date:'',
  completion_percentage:1,
  priority_level:4
};
ngOnInit(): void {
  
}
editMode:boolean = false;
editTitle:string = '';
editDescription:string ='';
editTargetDate:string ='';
editCompletionPercentage:number = 0;
editPriorityLevel:number = 0;
editTask(){
  this.editMode = true;
  this.editTitle = this.taskInfo.title;
  this.editDescription = this.taskInfo.description;
  this.editTargetDate = this.taskInfo.target_end_date;
  this.editCompletionPercentage = this.taskInfo.completion_percentage;
  this.editPriorityLevel = this.taskInfo.priority_level;
}
@Output() delete:EventEmitter<number> = new EventEmitter<number>();

deleteTask(){
this.delete.emit(this.taskInfo.id);
}

saveChanges(){
  this.taskInfo.title = this.editTitle;
  this.taskInfo.description = this.editDescription;
  this.taskInfo.target_end_date = this.editTargetDate;
  this.taskInfo.completion_percentage = this.editCompletionPercentage;
  this.taskInfo.priority_level = this.editPriorityLevel;

  this.editMode = false;
}
cancelChanges(){
this.editMode = false;
}
expand:boolean = false;
expandInfo(){
  this.expand = true;
}
hideInfo(){
  this.expand = false;
}
}
