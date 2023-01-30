import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatTrackerComponent } from './stat-tracker/stat-tracker.component';
// import { HeroesComponent } from './heroes/heroes.component'; <-- insert components here
import { TaskListComponent } from './task-list/task-list.component';
import { AppComponent } from './app.component';
import { HomeDashBoardComponent } from './home-dash-board/home-dash-board.component';
import { TaskWindowComponent } from './task-window/task-window.component';
import { NotesComponent } from './notes/notes.component';
const routes: Routes = [
  // { path: 'heroes', component: HeroesComponent }
  {path:'home',component:HomeDashBoardComponent},
  {path:'task',component: TaskListComponent},
  {path:'stats',component:StatTrackerComponent},
  // {path:'taskWindow',component:TaskWindowComponent},
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'note',component:NotesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }