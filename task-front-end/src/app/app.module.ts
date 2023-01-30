import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TaskInfoComponent } from './task-info/task-info.component';
import { TaskListComponent } from './task-list/task-list.component';
import { StatTrackerComponent } from './stat-tracker/stat-tracker.component';
import { HomeDashBoardComponent } from './home-dash-board/home-dash-board.component';
import { TaskWindowComponent } from './task-window/task-window.component';
import { CalanderComponent } from './calander/calander.component';
import { NotesComponent } from './notes/notes.component';
import { HomeGuardResolver } from './home-guard.resolver';
import { CreateNewModalComponent } from './create-new-modal/create-new-modal.component';
import { EditDeleteModalComponent } from './edit-delete-modal/edit-delete-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    TaskInfoComponent,
    TaskListComponent,
    StatTrackerComponent,
    HomeDashBoardComponent,
    TaskWindowComponent,
    CalanderComponent,
    NotesComponent,
    CreateNewModalComponent,
    EditDeleteModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HomeGuardResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
