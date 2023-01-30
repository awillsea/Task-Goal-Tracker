import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { TaskServiceService } from './task-service.service';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class HomeGuardResolver implements Resolve<any> {
  constructor(private taskSrv:TaskServiceService){

  }
  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
  //   return of(true);
  // }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Task[] | Observable<Task[]> | Promise<Task[]> {
    this.taskSrv.getAll2();
    return this.taskSrv.data;
  }
}
