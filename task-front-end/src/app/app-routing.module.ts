import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatTrackerComponent } from './stat-tracker/stat-tracker.component';
// import { HeroesComponent } from './heroes/heroes.component'; <-- insert components here
import { TaskListComponent } from './task-list/task-list.component';
import { StatListComponent } from './stat-list/stat-list.component';
import { AppComponent } from './app.component';
import { HomeDashBoardComponent } from './home-dash-board/home-dash-board.component';

const routes: Routes = [
  // { path: 'heroes', component: HeroesComponent }
  {path:'home',component:HomeDashBoardComponent},
  {path:'task',component: TaskListComponent},
  {path:'stats',component:StatTrackerComponent},
  {path:'statList',component:StatListComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }