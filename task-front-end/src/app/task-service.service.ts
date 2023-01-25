import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task';


@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  port:number = 7140;

  getAll(cb:any){
    this.http.get<Task[]>(`https://localhost:${this.port}/task`).subscribe(cb);
  }


	getOne(cb: any, id: number) {
		this.http.get<Task>(`https://localhost:${this.port}/task/${id}`).subscribe(cb);
	}

	CreateTask(cb:any, newTask:Task){
		this.http.post<Task>(`https://localhost:${this.port}/task/`,newTask).subscribe(cb);
	};

	UpdateTask(cb:any, Task:Task){
		this.http.put<Task>(`https://localhost:${this.port}/task/${Task}`, Task).subscribe(cb);
	}
  DeleteTask(cb:any, task_id:number){
    this.http.delete<Task>(`https://localhost:${this.port}/task?id=${task_id}`).subscribe(cb);
  }

  constructor(private http: HttpClient) { }
}
