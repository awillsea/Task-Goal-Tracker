import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TaskInfoComponent } from './task-info/task-info.component';
import { TaskListComponent } from './task-list/task-list.component';
import { StatTrackerComponent } from './stat-tracker/stat-tracker.component';
import { StatListComponent } from './stat-list/stat-list.component';
import { HomeDashBoardComponent } from './home-dash-board/home-dash-board.component';
import { TaskWindowComponent } from './task-window/task-window.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskInfoComponent,
    TaskListComponent,
    StatTrackerComponent,
    StatListComponent,
    HomeDashBoardComponent,
    TaskWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
