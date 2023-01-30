import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskInfoComponent } from '../task-info/task-info.component';
import { TaskServiceService } from '../task-service.service';
@Component({
  selector: 'app-task-list',

  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  ListOfTask: Task[] = [];
  title: string = '';
  description: string = '';
  start_date: string = '';
  target_end_date: string = '';
  end_Date:string = '';
  completion_percentage: number = 0;
  priority_level: number = 0;
  constructor(public TaskSrv: TaskServiceService) {
    this.TaskSrv.getAll2();
  }
  @Input() TaskIds: number = 0;
  refresh() {
    this.TaskSrv.getAll((result: Task[]) => {
      this.ListOfTask = result;
    });
    this.TaskSrv.getAll2();
  }

  ngOnInit(): void {
    this.refresh();
  }


  
makeATask(newTask:Task){
this.TaskSrv.CreateTask(()=>{
  this.refresh();
},newTask)
}

  deleteTask(taskID: number) {
    this.TaskSrv.DeleteTask(() => {
      this.refresh();
      console.log(taskID);
    }, taskID);
  }
}
