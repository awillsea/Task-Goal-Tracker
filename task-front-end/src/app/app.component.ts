import { Component,OnInit } from '@angular/core';
import { TaskServiceService } from './task-service.service';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'task-front-end';
  // constructor(private TaskSrv:TaskServiceService){this.refresh()}
  // refresh(){
  // this.TaskSrv.getAll2();
  // }
  constructor(private taskSrv:TaskServiceService){

  }
  ngOnInit(): void {
    this.taskSrv.getAll2();
  }
}
