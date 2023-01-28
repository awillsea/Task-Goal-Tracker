import { Component,OnInit,ElementRef,ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-calander',
  templateUrl: './calander.component.html',
  styleUrls: ['./calander.component.css']
})
export class CalanderComponent implements OnInit {
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
  daysInCurrentMonth:number [] = [
    // 28,29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,1
  ]
  daysBeforeCurrentMonth:number [] = [];
  daysAfterCurrentMonth:number [] = [];
  daysInCalendarMonth:number [] = [];
  date:Date = new Date();
  currentMonth:number = this.date.getMonth();
  currentYear:number = this.date.getFullYear();
  isToday:boolean = false;

  renderCalendar(){  
    let firstDayOfPrevMonth:number = new Date(this.currentYear,this.currentMonth,1).getDay();
    let lastDateOfTheMonth:number = new Date(this.currentYear,this.currentMonth+1,0).getDate();
    let lastDateOfPrevMonth:number = new Date(this.currentYear,this.currentMonth,0).getDate();
    let lastDayOfMonth:number = new Date(this.currentYear,this.currentMonth,lastDateOfTheMonth).getDay()
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
        console.log(this.isToday)
      }
      
    this.daysInCurrentMonth.push(i);
    }
    for(let i:number = lastDayOfMonth; i<6;i++){
      this.daysAfterCurrentMonth.push(i - lastDayOfMonth + 1);
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

ngOnInit(): void {
 this.renderCalendar()
}
}



 


