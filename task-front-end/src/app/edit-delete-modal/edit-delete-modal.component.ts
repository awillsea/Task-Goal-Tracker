import { Component, Input, } from '@angular/core';
import { Task } from '../task';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-edit-delete-modal',
  templateUrl: './edit-delete-modal.component.html',
  styleUrls: ['./edit-delete-modal.component.css']
})
export class EditDeleteModalComponent {
  taskInfo:Task = {
    id:0,
    title:'',
    description:'',
    start_date:'',
    end_date:'',
    target_end_date:'',
    completion_percentage:1,
    priority_level:4
  };
  @Input() listOfTask:Task [] = [];
  constructor(private taskSrv:TaskServiceService){}
  ngOnInit(): void {
    this.listOfTask = this.taskSrv.data;
  }
  selected:boolean = false;
 @Input() taskID:number = 0;
  editMode:boolean = false;
  editTitle:string = '';
  editDescription:string ='';
  editTargetDate:string ='';
  editCompletionPercentage:number = 0;
  editPriorityLevel:number = 0;
  taskSearchById(id:number){
     console.log(this.listOfTask[id-1].title);
    this.taskInfo.title = this.listOfTask[id-1].title;
    this.taskInfo.description = this.listOfTask[id-1].description;
    this.taskInfo.start_date = this.listOfTask[id-1].start_date;
    this.taskInfo.target_end_date = this.listOfTask[id-1].target_end_date;
    this.taskInfo.completion_percentage = this.listOfTask[id-1].completion_percentage;
    this.taskInfo.priority_level = this.listOfTask[id-1].priority_level;


     this.selected = true;
     this.editTask();
  }
  editTask(){
    this.editMode = true;
    this.editTitle = this.taskInfo.title;
    this.editDescription = this.taskInfo.description;
    this.editTargetDate = this.taskInfo.target_end_date;
    this.editCompletionPercentage = this.taskInfo.completion_percentage;
    this.editPriorityLevel = this.taskInfo.priority_level;
    // this.selected = false;

  }
  // @Output() delete:EventEmitter<number> = new EventEmitter<number>();
  
  // deleteTask(){
  // this.delete.emit(this.taskInfo.id);
  // }
  
  saveChanges(id:number){
    this.taskInfo.id = id;
    this.taskInfo.title = this.editTitle;
    this.taskInfo.description = this.editDescription;
    this.taskInfo.target_end_date = this.editTargetDate;
    this.taskInfo.completion_percentage = this.editCompletionPercentage;
    this.taskInfo.priority_level = this.editPriorityLevel;
  
    // this.editMode = false;
    this.taskSrv.UpdateTask(()=>{console.log(this.taskInfo)},this.taskInfo);
  }
  // cancelChanges(){
  // this.editMode = false;
  // }
  // expand:boolean = false;
  // expandInfo(){
  //   this.expand = true;
  // }
  // hideInfo(){
  //   this.expand = false;
  // }
}
