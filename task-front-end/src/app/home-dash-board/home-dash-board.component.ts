import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';
import { Task } from '../task';

@Component({
  selector: 'app-home-dash-board',
  templateUrl: './home-dash-board.component.html',
  styleUrls: ['./home-dash-board.component.css']
})
export class HomeDashBoardComponent implements OnInit {
constructor(private taskSrv:TaskServiceService){

}
parentList:Task [] = [];
  ngOnInit(): void {
  this.taskSrv.getAll2()
  this.parentList = this.taskSrv.data;
}
}
