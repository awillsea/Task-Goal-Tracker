import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskServiceService } from '../task-service.service';
import { Task } from '../task';

@Component({
  selector: 'app-stat-list',
  templateUrl: './stat-list.component.html',
  styleUrls: ['./stat-list.component.css']
})
export class StatListComponent implements OnInit {
  constructor(private TaskSrv:TaskServiceService){

  }
  ListOfTask:Task [] = [];
  TaskIds:number = 0;
  ngOnInit(): void {
    this.ListOfTask = this.TaskSrv.data;
  }


}
