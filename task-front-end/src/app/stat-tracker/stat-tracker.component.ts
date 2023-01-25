import { Component,Input,Output,OnInit,EventEmitter } from '@angular/core';
import { Task } from '../task';
import { TaskListComponent } from '../task-list/task-list.component';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-stat-tracker',
  templateUrl: './stat-tracker.component.html',
  styleUrls: ['./stat-tracker.component.css']
})
export class StatTrackerComponent implements OnInit {
  AmountOfTasks:number=this.TaskSrv.data.length;
  ListForStats:Task [] = this.TaskSrv.data;
  title:string = this.ListForStats[1].title;

  firstDate:Date = new Date();
  secondDate:Date = new Date();
    ngOnInit(): void {


  }

  constructor(public TaskSrv:TaskServiceService ){
    this.refresh2();

  }


  refresh2(){
    this.TaskSrv.getAll2();
  }
  CompareStartDateTime(dateOne:Date,DateTwo:Date){
     if(dateOne > DateTwo){
      return -1; // -1 represents if the first date inputed is older/after the second date
     }
     else if(dateOne < DateTwo){
      return 0 // 0 represents if the second date that was inputted is older/after the first date
     }
     else{
      return 1 // 1 represents if they are the same date
     }
  }
  CompareEndDateTime(dateOne:Date,DateTwo:Date){
    if(dateOne > DateTwo){
     return -1; // -1 represents if the first date inputed is older/after the second date
    }
    else if(dateOne < DateTwo){
     return 0 // 0 represents if the second date that was inputted is older/after the first date
    }
    else{
     return 1 // 1 represents if they are the same date
    }
 }

checkTime(){
  let tempPart:any = this.ListForStats[0].start_date.split('-')
  let tempDate:Date = new Date(tempPart[0],tempPart[1],tempPart[2]);
console.log(this.CompareStartDateTime(this.firstDate,tempDate));
}

  DateCheck(){
    
      // let tempFirstDate:any = this.firstDate.split('-')
    for(let i:number = 0; i <=this.ListForStats.length; i++){
      let tempPart:any = this.ListForStats[i].start_date.split('-')
      let tempDate:Date = new Date(tempPart[0],tempPart[1],tempPart[2]);
      console.log(tempDate);
      // if(this.checkTime()) <-- use function to compare the ranged dates. and if they are with in that range get back the Id's of those dates so we can then populate how many task were created in that span
      
    }
    // console.log(this.ListForStats[0].start_date)
  }


 }





