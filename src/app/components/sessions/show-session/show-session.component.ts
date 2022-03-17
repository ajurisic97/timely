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
  modalEdit(item:any){
    this.session = item;
    this.modalTitle="Promjeni ime projekta";
    this.activateAddEdit = true;
  }
  deleteSession(item:any){
    if(confirm(`Jeste li sigurni da zelite obrisati projekt ${item.id} ${item.name}?`)){
      this.service.deleteSession(item.id).subscribe(res =>{
        var closeModalBtn = document.getElementById('add-edit-modal-close');
        if(closeModalBtn){
          closeModalBtn.click();
        }
        var showDeleteSuccess = document.getElementById('delete-success-alert');
  
        if (showDeleteSuccess){
          showDeleteSuccess.style.display="block";
  
        }
        setTimeout(function(){
          if (showDeleteSuccess){
            showDeleteSuccess.style.display="none";
          }
        },4000)
        this.sessionList$ = this.service.getSessionList();
      })
    }
  }
  modalClose(){
    this.activateAddEdit = false;
    this.sessionList$=this.service.getSessionList();
  }

}
