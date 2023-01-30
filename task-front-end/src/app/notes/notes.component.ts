import { Component,OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  listOfNotes:Note [] = [];
  title:string = '';
  body:string = '';
  constructor(private NoteSrv:NoteService){
  }
ngOnInit(): void {
  this.refresh();
}
refresh(){
this.NoteSrv.getAll((result:Note[])=>{
  this.listOfNotes = result;
})
}
showMakeNewNote:boolean = false;
showButton(){
  this.showMakeNewNote = true;
}
createANote(){
  let newNote:Note = {
  id: 0,
  title: this.title,
  body:this.body,
  }
  this.NoteSrv.CreateNote(()=>{this.refresh()},newNote)
  
}
deleteMode:boolean = false;
showDeleteMode(){
this.deleteMode = true;
}
deleteNote(noteID: number) {
  console.log('inside delete function')
  console.log(noteID);
  this.NoteSrv.DeleteNote(() => {
    this.refresh();
    console.log(noteID);
  }, noteID);
}
editMode:boolean = false;
editTitle:string ='';
editBody:string ='';
editNote(note:Note){
  // this.editMode = true;
  console.log(note)
  this.NoteSrv.UpdateNote(()=>{
    this.refresh()
  },note)
  
}


}
