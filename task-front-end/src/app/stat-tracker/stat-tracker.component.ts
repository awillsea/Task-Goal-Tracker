import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Task } from '../task';
import { TaskListComponent } from '../task-list/task-list.component';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-stat-tracker',
  templateUrl: './stat-tracker.component.html',
  styleUrls: ['./stat-tracker.component.css'],
})
export class StatTrackerComponent implements OnInit {
  AmountOfTasks: number = this.TaskSrv.data.length;
  ListForStats: Task[] = [];

  firstDate: Date = new Date();
  secondDate: Date = new Date();
  ngOnInit(): void {
    this.refresh2();
  }

  constructor(public TaskSrv: TaskServiceService) {
    this.refresh2();
  }

  refresh2() {
    this.TaskSrv.getAll2();
    this.ListForStats = this.TaskSrv.data;
  }

  convertDateToString(date: Date) {
    let convert: string = date.toString();
    return convert;
  }
  splitDashFromDatString(stringDate: string) {
    let parts: any = stringDate.split('-');
    return parts;
  }
  convertStringToDate(dateString: any) {
    let newDate: Date = new Date(
      dateString[0],
      dateString[1] - 1,
      dateString[2]
    );
    return newDate;
  }

  amountOfTaskWithInRange: number[] = [];
  amountSinceStartDate: number[] = [];
  taskInRange: boolean = false;
  DateCheck() {
    this.amountOfTaskWithInRange = [];
    // let tempFirstDate:any = this.firstDate.split('-')
    let tempFirstDate = this.convertDateToString(this.firstDate);
    let tempFirstParts = this.splitDashFromDatString(tempFirstDate);
    let newTempFirstDate = this.convertStringToDate(tempFirstParts);
    let tempSecondDate = this.convertDateToString(this.secondDate);
    let tempSecondParts = this.splitDashFromDatString(tempSecondDate);
    let newTempSecondDate = this.convertStringToDate(tempSecondParts);

    for (let i: number = 0; i <= this.ListForStats.length - 1; i++) {
      let tempPart: any = this.splitDashFromDatString(
        this.ListForStats[i].start_date
      );
      let tempDate: Date = this.convertStringToDate(tempPart);
      // console.log(tempDate);
      // console.log(`this is before if statements, var amount of task with in range is currently${this.amountSinceStartDate.length} `)
      // if(this.checkTime()) <-- use function to compare the ranged dates. and if they are with in that range get back the Id's of those dates so we can then populate how many task were created in that span
      if (tempDate >= newTempFirstDate && tempDate <= newTempSecondDate) {
        this.amountOfTaskWithInRange.push(this.ListForStats[i].id)
        console.log('inside the && statement')
      
      } else {
        console.log(`inside the last statement`);
        console.log(tempDate)
      }
    }
    console.log(this.amountOfTaskWithInRange.length);
    console.log(this.amountSinceStartDate.length);
    if (this.amountOfTaskWithInRange.length > 0) {
      this.taskInRange = true;
    }
    this.completeListOfTaskInRange();
    this.totalCompletionPercentageInRange();
  }

  tempListForStats: Task[] = [];

  completeListOfTaskInRange() {
  this.tempListForStats = [];

    let arrLength: number = this.amountOfTaskWithInRange.length - 1;
    for (let i: number = 0; i <= arrLength; i++) {
      for (let j: number = 0; j <= this.ListForStats.length - 1; j++) {
        console.log(`${this.amountOfTaskWithInRange[i]},${this.ListForStats[j].id}`)
        if (this.amountOfTaskWithInRange[i] == this.ListForStats[j].id) {
          this.tempListForStats.push(this.ListForStats[j]);
        }
      }
    }
  }
  percentWithInRange:number = 0;
  AmountOfCompletedTaskInRange:number =0;
  totalCompletionPercentageInRange(){
    this.percentWithInRange = 0;
    this.AmountOfCompletedTaskInRange = 0;
    let percentages:number [] = [];
    this.tempListForStats.forEach(task => {
      percentages.push(task.completion_percentage);
      if(task.completion_percentage == 100){
        this.AmountOfCompletedTaskInRange++;
      }
    });
    console.log(`temp list length ${this.tempListForStats.length}`)
    console.log('this is the percentage length' + `${percentages.length}`);
    
    let sumOfCompletion: number =0;
    percentages.forEach(num =>{
      console.log(num);
      sumOfCompletion += num;
    })
    // let divider:number = percentages.length * 100;
    let totalCompletionPercentage:number = sumOfCompletion/percentages.length;
    console.log('this is the final number' + Math.round(totalCompletionPercentage))
    this.percentWithInRange =  Math.round(totalCompletionPercentage);
  }


}
