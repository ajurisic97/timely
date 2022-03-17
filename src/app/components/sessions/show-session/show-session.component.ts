import { formatDate, getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { map, Observable } from 'rxjs';
import { Session } from 'src/app/models/Session';
import { SessionApiService } from 'src/app/session-api.service';
@Component({
  selector: 'app-show-session',
  templateUrl: './show-session.component.html',
  styleUrls: ['./show-session.component.css']
})
export class ShowSessionComponent implements OnInit {
  sessionList$!:Observable<any[]>;
  constructor(private service:SessionApiService) { 
    
  }

  ngOnInit(): void {
    this.sessionList$=this.service.getSessionList();
    
  }
  //Varijable
  modalTitle:string='';
  activateAddEdit:boolean = false;
  session:any;
  pocetak:Date=new Date();
  startTimer(){
    this.pocetak=new Date();
    var button1 = document.getElementById("idStopTimer");
    if(button1){
      button1.style.display="block";
    }
    var button2 = document.getElementById("idStartTimer");
    if(button2){
      button2.style.display="none";
    }
    var x = String(this.pocetak);
    console.log(x);
    sessionStorage.setItem('timer', x);


  }
  modalAdd(){
    this.session={
      id:0,
      name:null,
      dateStart:this.pocetak,
      dateEnd:null,
      duration:null
    }
    this.modalTitle="Predaj projekt"
    this.activateAddEdit = true;
  }
  modalClose(){
    this.activateAddEdit = false;
    this.sessionList$=this.service.getSessionList();
  }

}
