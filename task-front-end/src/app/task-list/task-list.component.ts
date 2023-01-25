import { Component,Input,Output,EventEmitter,OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskInfoComponent } from '../task-info/task-info.component';
import { TaskServiceService } from '../task-service.service';
@Component({
  selector: 'app-task-list',
//   template:`<ul>
//   <li *ngFor="let task of TaskSrv.data | async">{{ task.title }}</li>
// </ul>`,
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
 
  ListOfTask:Task[] = [];
  title:string = '';
  description:string = '';
  start_date:string ='';
  target_end_date:string = '';
  completion_percentage:number = 0;
  priority_level:number = 0;
  constructor(public TaskSrv:TaskServiceService){
    this.TaskSrv.getAll2();

  }
  refresh(){
    this.TaskSrv.getAll((result:Task[])=>{this.ListOfTask = result})
    this.TaskSrv.getAll2();

  }
 
  ngOnInit(): void {
    this.refresh();

  }
  makeNewTask:boolean = false;
  showMakeANewTaskInput(){
    this.makeNewTask = true;

  }
  clearInput(){
    this.title = '';
  this.description = '';
  this.start_date = '';
  this.target_end_date ='';
  this.completion_percentage = 0;
  this.priority_level = 0;
  }
  hideNewTask(){
    this.makeNewTask = false;
  }
  createATask(){
    this.makeNewTask = false;
    let newTask:Task = {
      id:0,
      title:this.title,
      description:this.description,
      start_date:this.start_date,
      target_end_date:this.target_end_date,
      completion_percentage:this.completion_percentage,
      priority_level:this.priority_level
    }
    this.TaskSrv.CreateTask(()=>{this.refresh()},newTask
    )
    this.clearInput();
  }


  deleteTask(taskID:number){
    this.TaskSrv.DeleteTask(()=>{
      this.refresh();
      console.log(taskID)
    },taskID)
  }
}
