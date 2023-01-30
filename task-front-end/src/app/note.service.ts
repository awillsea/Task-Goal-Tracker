import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from './note';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
  port:number = 7140;
  httpString:string =`https://localhost:${this.port}/note`;

  constructor(private http: HttpClient) { }

  getAll(cb:any){
    this.http.get<Note[]>(this.httpString).subscribe(cb);
  }
  // getAll2(){
  //    return this.http.get<Note[]>(`https://localhost:${this.port}/Note`).subscribe(response =>{
  //     this.data = response;
  //   });
  // }

	getOne(cb: any, id: number) {
		this.http.get<Note>(`${this.httpString}/${id}`).subscribe(cb);
	}

	CreateNote(cb:any, newNote:Note){
		this.http.post<Note>(`${this.httpString}/`,newNote).subscribe(cb);
	};

	UpdateNote(cb:any, Note:Note){
		this.http.put<Note>(`${this.httpString}/`, Note).subscribe(cb);
	}
  DeleteNote(cb:any, Note_id:number){
    this.http.delete<Note>(`${this.httpString}/${Note_id}`).subscribe(cb);
  }
}
