import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionApiService {
  //API se otvara na portu 44349 (VS)
  readonly sessionAPIUrl="https://localhost:44349/api";
  constructor(private http:HttpClient) { }
  //DohvatiSve
  getSessionList():Observable<any[]>{
    return this.http.get<any>(this.sessionAPIUrl+'/sessions');
  }

  //dohvati po IDu
  getSessionById(id:number){
     return this.http.get(this.sessionAPIUrl+`/sessions/${id}`);
  }

  //dodaj
  addSession(data:any){
    return this.http.post(this.sessionAPIUrl+'/sessions',data);
  }

  //edit
  updateSession(id:number|string,data:any){
    return this.http.put(this.sessionAPIUrl+`/sessions/${id}`,data);
  }

  //delete
  deleteSession(id:number|string){
    return this.http.delete(this.sessionAPIUrl+`/sessions/${id}`);
  }
}
