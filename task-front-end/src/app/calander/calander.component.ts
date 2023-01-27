import { Component,OnInit,ElementRef,ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-calander',
  templateUrl: './calander.component.html',
  styleUrls: ['./calander.component.css']
})
export class CalanderComponent implements OnInit {
  index:number = 1;
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
    "Mon",
    "Tue",
    "Wes",
    "Thu",
    "Fri",
    "Sat",
    "Sun",

  ]
  calendarDays:number [] = [
    28,29,30,31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1
  ]
  date:Date = new Date();
  currentMonth:number = this.date.getMonth() + 1;
  year:number = this.date.getFullYear();
  // daysThisMonth:number = this.date.getDate();
  daysInMonth(){

    return new Date(this.year, this.currentMonth, 0).getDate();
  }
  amountOfDaysArr:number [] = [];
  addToArray(){
    let daysThisMonth = this.daysInMonth()
    for(let i:number = 0; i<= daysThisMonth -1 ; i++){
      this.amountOfDaysArr.push(i);
    }
  }
  subtractSeven(){
  //  let index:number;
  //  let lastIndex:number;
  //  for(let i:number = 0; i<=this.amountOfDaysArr.length -1; i++){
  //   this.index++;
  //   if()
  //  }

  }
ngOnInit(): void {
  this.addToArray();
}
}



 


