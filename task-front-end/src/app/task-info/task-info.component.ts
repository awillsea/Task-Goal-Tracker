import { Component,Input,OnInit,Output,EventEmitter } from '@angular/core';
import { Task } from '../task';
@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.css']
})
export class TaskInfoComponent implements OnInit  {
@Input() taskInfo:Task = {
  id:2,
  title:'Study',
  description:'Practice tech,code,interviews every day',
  start_date:'01-24-2023',
  target_end_date:'12-31-2023',
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
@Output() delete:EventEmitter<Task> = new EventEmitter<Task>();

deleteTask(){
this.delete.emit(this.taskInfo);
}
}
