import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Task } from '../task';
import { TaskServiceService } from '../task-service.service';
@Component({
  selector: 'app-create-new-modal',
  templateUrl: './create-new-modal.component.html',
  styleUrls: ['./create-new-modal.component.css']
})
export class CreateNewModalComponent implements OnInit {
  title: string = '';
  description: string = '';
  start_date: string = '';
  target_end_date: string = '';
  end_date:string = '';
  completion_percentage: number = 0;
  priority_level: number = 0;
  clearInput() {
    this.title = '';
    this.description = '';
    this.start_date = '';
    this.target_end_date = '';
    this.completion_percentage = 0;
    this.priority_level = 0;
  }
  @Output() sendTask:EventEmitter<Task> = new EventEmitter<Task>();
  createATask() {
    let newTask: Task = {
      id: 0,
      title: this.title,
      description: this.description,
      start_date: this.start_date,
      target_end_date: this.target_end_date,
      end_date: this.end_date,
      completion_percentage: this.completion_percentage,
      priority_level: this.priority_level,
    };
    this.sendTask.emit(newTask);
    // this.TaskSrv.CreateTask(() => {
    // }, newTask);
    this.clearInput();
    
  }
constructor(private TaskSrv:TaskServiceService){

}
ngOnInit(): void {
  
}
}
