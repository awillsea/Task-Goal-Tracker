import { Component,OnInit,ElementRef,ViewChild, AfterViewInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';
import { Task } from '../task';

@Component({
  selector: 'app-calander',
  templateUrl: './calander.component.html',
  styleUrls: ['./calander.component.css']
})
export class CalanderComponent implements OnInit {
  data:Task [] = [];
  taskStartDays:Date [] = [];
  constructor(public taskSrv:TaskServiceService){
    this.data = this.taskSrv.data
    for(let i:number = 0;i <=this.data.length - 1; i++){
    let tempSpilt:string = this.taskSrv.splitDashFromDatString(this.data[i].start_date);
    let tempDate:Date = this.taskSrv.convertStringToDate(tempSpilt);
    this.taskStartDays.push(tempDate);
    let dayCreated:number = new Date(tempDate.getFullYear(),tempDate.getMonth(),0).getDate();


    }

  }
 

  month:string [] =
  [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
  weekDays:string [] =[
    "Sun",
    "Mon",
    "Tue",
    "Wes",
    "Thu",
    "Fri",
    "Sat",

  ]
  daysInCurrentMonth:number [] = [];
  daysBeforeCurrentMonth:number [] = [];
  daysAfterCurrentMonth:number [] = [];
  daysInCalendarMonth:number [] = [];
  date:Date = new Date();
  currentMonth:number = this.date.getMonth();
  currentYear:number = this.date.getFullYear();
  isToday:boolean = false;
  todaysNum:number = 0;
  endDateMatch:boolean = false;
  taskEndDate:number = 0;
  renderCalendar(){  
    let firstDayOfPrevMonth:number = new Date(this.currentYear,this.currentMonth,1).getDay();
    let lastDateOfTheMonth:number = new Date(this.currentYear,this.currentMonth+1,0).getDate();
    let lastDateOfPrevMonth:number = new Date(this.currentYear,this.currentMonth,0).getDate();
    let lastDayOfMonth:number = new Date(this.currentYear,this.currentMonth,lastDateOfTheMonth).getDay()
    this.todaysNum = 0;
    this.daysInCurrentMonth = [];
    this.daysBeforeCurrentMonth = [];
    this.daysAfterCurrentMonth = [];
    this.isToday = false;
    let tempArr:number [] = [];
    for(let i:number = firstDayOfPrevMonth; i > 0; i--){
      this.daysBeforeCurrentMonth.push(lastDateOfPrevMonth - i + 1);
    }

    for(let i:number = 1; i<=lastDateOfTheMonth;i++){
      console.log('index number is' + i)
      console.log('this.date.getDate() is '+ this.date.getDate())
      if(i === this.date.getDate() && this.currentMonth === new Date().getMonth() && this.currentYear === new Date().getFullYear() ){
        this.isToday = true;
        this.todaysNum = i;
        console.log(this.isToday)
      }
      
      
    this.daysInCurrentMonth.push(i);
    }
    for(let i:number = lastDayOfMonth; i<6;i++){
      this.daysAfterCurrentMonth.push(i - lastDayOfMonth + 1);
    }

  if(this.currentMonth < 0 || this.currentMonth > 11 ){
    this.date = new Date(this.currentYear,this.currentMonth);
    this.currentYear = this.date.getFullYear();
    this.currentMonth = this.date.getMonth();
  }else{
    this.date = new Date();

  }


}
  nextMonth(){
    this.currentMonth ++;

    this.renderCalendar();

    
  }
  previousMonth(){
    this.currentMonth --;
    this.renderCalendar();

  }
listOfStringEndDate:string [] = [];
listOfEndDates:Date [] = [];
  TaskCompleted(){
    this.data.forEach((c)=>{this.listOfStringEndDate.push(c.end_date)})
    this.listOfStringEndDate.forEach((c)=>{
      let tempParts = this.taskSrv.splitDashFromDatString(c);
      let tempDate = this.taskSrv.convertStringToDate(tempParts);
      this.listOfEndDates.push(tempDate);
    })

  }
  part= {
    datePart:'',
    monthPart:'',
    yearPart:''

  }
  listOfParts:string [] =[]
ngOnInit(): void {
 this.renderCalendar()
}
}



 


