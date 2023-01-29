import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Task } from '../task';
import { TaskServiceService } from '../task-service.service';
@Component({
  selector: 'app-task-window',
  templateUrl: './task-window.component.html',
  styleUrls: ['./task-window.component.css']
})
export class TaskWindowComponent implements OnInit {

  smallListOfTask:Task [] = [];
  filteredList:Task [] = [];
  nothingSelected:boolean = true;
  constructor(private TaskSrv:TaskServiceService){
    this.refresh();
  }
  ngOnInit(): void {
    this.refresh();
    if(this.nothingSelected){
      this.filteredList.push(this.smallListOfTask[0])
      this.filteredList.push(this.smallListOfTask[1])
      this.filteredList.push(this.smallListOfTask[2])

    }
}
refresh(){
  this.TaskSrv.getAll2();
  this.smallListOfTask =  this.TaskSrv.data;
}
almostDone:Task [] = [];
almostComplete(){
  this.filteredList = [];
  this.almostDone  = []
  this.nothingSelected = false;
  let first:number = 0;
  let second:number = 0;
  let third:number = 0;
  let length:number = this.smallListOfTask.length -1;
  for(let i:number = 0; i <= length; i++){
    console.log(this.smallListOfTask[i].completion_percentage)
    if(this.smallListOfTask[i].completion_percentage < 100){
      if(this.smallListOfTask[i].completion_percentage >= first){
        third = second;
        second = first;
        first = this.smallListOfTask[i].completion_percentage;
        // console.log(`${first},${second},${third}`)
      }else if(this.smallListOfTask[i].completion_percentage >= second){
        third = second;
        second = this.smallListOfTask[i].completion_percentage;
        // console.log(`${first},${second},${third}`)

      }
      else if(this.smallListOfTask[i].completion_percentage >= third){
        third = this.smallListOfTask[i].completion_percentage;
        // console.log(`${first},${second},${third}`)

      }
    }
  }
  this.smallListOfTask.forEach(task =>{
    if(task.completion_percentage == first || task.completion_percentage == second || task.completion_percentage == third){
      this.almostDone.push(task);
    }
  })
  let tempAlmost:Task [] = this.almostDone.sort((a,b)=>{return b.completion_percentage-a.completion_percentage});
  this.almostDone = tempAlmost;
  this.filteredList = this.almostDone;
}
notEvenClose:Task [] = [];
waysToGo(){
  this.filteredList = [];
  this.notEvenClose = [];
  this.nothingSelected = false;
  let first:number = 100;
  let second:number = 100;
  let third:number = 100;
  let length:number = this.smallListOfTask.length -1;
  for(let i:number = 0; i <= length; i++){
    if(this.smallListOfTask[i].completion_percentage <= first ){
      third = second;
      second = first;
      first = this.smallListOfTask[i].completion_percentage;
    }
    else if(this.smallListOfTask[i].completion_percentage <= second ){
      third = second;
      second = this.smallListOfTask[i].completion_percentage;
    }
    else if(this.smallListOfTask[i].completion_percentage <= third){
      third = this.smallListOfTask[i].completion_percentage;
    }
}
this.smallListOfTask.forEach(task =>{
  if(task.completion_percentage == first || task.completion_percentage == second || task.completion_percentage == third){
    this.notEvenClose.push(task);
  }
})
let tempAlmost:Task [] = this.notEvenClose.sort((a,b)=>{return b.completion_percentage-a.completion_percentage});
this.notEvenClose = tempAlmost;
this.filteredList = this.notEvenClose;
}

topPriorityLevel:Task [] = [];
findHighPriority(){
  this.filteredList = [];
  this.topPriorityLevel = [];
  this.nothingSelected = false;
  let first:number = 0;
  let second:number = 0;
  let third:number = 0;
  let length:number = this.smallListOfTask.length -1;
  for(let i:number = 0; i <= length; i++){
    console.log(this.smallListOfTask[i].priority_level)
      if(this.smallListOfTask[i].priority_level >= first){
        third = second;
        second = first;
        first = this.smallListOfTask[i].priority_level;
        // console.log(`${first},${second},${third}`)
      }else if(this.smallListOfTask[i].priority_level >= second){
        third = second;
        second = this.smallListOfTask[i].priority_level;
        // console.log(`${first},${second},${third}`)

      }
      else if(this.smallListOfTask[i].priority_level >= third){
        third = this.smallListOfTask[i].priority_level;
        // console.log(`${first},${second},${third}`)

      }
    
  }
  this.smallListOfTask.forEach(task =>{
    if(task.priority_level == first || task.priority_level == second || task.priority_level == third){
      this.topPriorityLevel.push(task);
    }
  })
  let tempAlmost:Task [] = this.topPriorityLevel.sort((a,b)=>{return b.priority_level-a.priority_level});
  this.topPriorityLevel = tempAlmost;
  this.filteredList = this.topPriorityLevel;
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
deadLineTask:Task [] = [];
closeToTargetDate()
{
  this.deadLineTask = [];
  this.filteredList = [];
  this.nothingSelected = false;
  let dateObj = new Date();
  let month = dateObj.getUTCMonth() + 1; //months from 1-12
  let day = dateObj.getUTCDate();
  let year = dateObj.getUTCFullYear();
  
  let newDate = year + "-" + month + "-" + day;
  console.log(newDate)


  let todaysDate:Date = new Date();
  // let todayTemp:string = this.convertDateToString(todaysDate);
  // console.log(`${todayTemp} date converted to string`)
  let tempPart:any = this.splitDashFromDatString(newDate);
  // console.log(`${tempPart} string splitting dashes`)
  todaysDate = this.convertStringToDate(tempPart);
  // console.log(`${todaysDate} should be converted back to date`);
  let first:Date = new Date(2030,12,31);
  let second:Date = new Date(2030,12,31);
  let third:Date = new Date(2030,12,31);
  let idOne:number = 0;
  let idTwo:number =0;
  let idThree:number =0;
  // first = todaysDate;
  let length:number = this.smallListOfTask.length -1;
  for(let i:number = 0; i <= length; i++)
  {
    // might need to add filter for 100%complete task so they don't show in this list
    console.log('this is inside the loop' + this.smallListOfTask[i].target_end_date)
    let tempIndexSplitDate:any = this.splitDashFromDatString(this.smallListOfTask[i].target_end_date);
    let tempIndexDate:Date = this.convertStringToDate(tempIndexSplitDate);
      if(tempIndexDate >= todaysDate)
      {
        console.log(`${tempIndexDate}this date is greater than or equal to todays date` + tempIndexDate)
        if(tempIndexDate <= first){
          third = second;
          second = first;
          first = tempIndexDate;
          idThree = idTwo;
          idTwo =idOne;
          idOne = this.smallListOfTask[i].id;
        console.log(`this is the first if: ${first},${second},${third}`);

          
        }else if(tempIndexDate <= second){
          third = second;
          second = tempIndexDate;
          idThree = idTwo;
          idTwo = this.smallListOfTask[i].id;
        console.log(`this is the second if: ${first},${second},${third}`);

        }else if(tempIndexDate<= third){
          third= tempIndexDate;
          idThree = this.smallListOfTask[i].id;
        console.log(` this is the last if: ${first},${second},${third}`);

        }
      
       
    
  }
}
  console.log(` this is after the loop and ifs First date${first},second date${second},third date${third}`);

  this.smallListOfTask.forEach(task =>
  {
   if(task.id == idOne || task.id == idTwo || task.id == idThree){
      this.deadLineTask.push(task);
   }
    }
  )
  this.deadLineTask = this.deadLineTask.reverse();
  this.filteredList = this.deadLineTask;
  
}


}
