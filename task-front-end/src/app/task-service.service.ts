import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private http: HttpClient) { }

 
  port:number = 7140;
  httpString:string = `https://localhost:${this.port}/task`;
  data:any [] = [];



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

  getAll(cb:any){
    this.http.get<Task[]>(`https://localhost:${this.port}/task`).subscribe(cb);
  }
  getAll2(){
     return this.http.get<Task[]>(`https://localhost:${this.port}/task`).subscribe(response =>{
      this.data = response;
    });
  }

	getOne(cb: any, id: number) {
		this.http.get<Task>(`https://localhost:${this.port}/task/${id}`).subscribe(cb);
	}

	CreateTask(cb:any, newTask:Task){
		this.http.post<Task>(`https://localhost:${this.port}/task/`,newTask).subscribe(cb);
	};

	UpdateTask(cb:any, Task:Task){
		this.http.put<Task>(`${this.httpString}/`, Task).subscribe(cb);
	}
  DeleteTask(cb:any, task_id:number){
    this.http.delete<Task>(`https://localhost:${this.port}/task?id=${task_id}`).subscribe(cb);
  }

}
