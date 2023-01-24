import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HeroesComponent } from './heroes/heroes.component'; <-- insert components here
import { TaskListComponent } from './task-list/task-list.component';
const routes: Routes = [
  // { path: 'heroes', component: HeroesComponent }
  {path:'task',component: TaskListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }