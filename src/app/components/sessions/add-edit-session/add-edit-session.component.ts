import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionApiService } from 'src/app/session-api.service';
@Component({
  selector: 'app-add-edit-session',
  templateUrl: './add-edit-session.component.html',
  styleUrls: ['./add-edit-session.component.css']
})
export class AddEditSessionComponent implements OnInit {

  sessionList$!: Observable<any[]>;
  constructor(private service: SessionApiService) { }

  @Input() session:any;
  id:number=0;
  name:string="";
  dateStart:Date=new Date();
  dateEnd:Date=new Date();
  duration:string="";

  ngOnInit(): void {
    this.id=this.session.id;
    this.name=this.session.name;
    this.dateStart=this.session.dateStart;
    this.dateEnd=this.session.dateEnd;
    this.duration=this.session.duration;
    this.sessionList$ = this.service.getSessionList();
  }
  addSession(){
    var x = new Date();
    
    var myStorage = window.sessionStorage;
    var timer = myStorage.getItem("timer");
    console.log(timer);
    var ds = new Date();
    if(timer!=null){
      ds = new Date(timer)
    }
    var diff = x.getMilliseconds() - ds.getMilliseconds();
    var d = Math.abs(Math.floor((diff/1000)/60));
    var session = {
      name: this.name,
      dateStart:ds,
      dateEnd:x,
      duration:d+" min"
    }
    console.log(session);
    this.service.addSession(session).subscribe(res =>{
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }
      var addSuccess = document.getElementById('add-success-alert');
      var button1 = document.getElementById("idStopTimer");
    
      var button2 = document.getElementById("idStartTimer");
      console.log("ds",ds);
      if (addSuccess){
        addSuccess.style.display="block"
        if (button1 && button2 ){
          button2.style.display="block";
          button1.style.display="none";
        }
        myStorage.clear();
      }
      setTimeout(function(){
        if (addSuccess){
          addSuccess.style.display="none";
        }
      },4000)
    })
  }
  updateSession(){
    
    
    var session = {
      name: this.name,
      id: this.id,
      dateStart:new Date(this.dateStart),
      dateEnd:new Date(this.dateEnd),
      duration:this.duration
    }
    var id:number = this.id;
    console.log("TEST:");
    console.log(session);
    this.service.updateSession(id,session).subscribe(res =>{
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }
      var showSuccess = document.getElementById('update-success-alert');

      if (showSuccess){
        showSuccess.style.display="block"

      }
      setTimeout(function(){
        if (showSuccess){
          showSuccess.style.display="none";
        }
      },4000)
    })
  }

  deleteSession(){
    var x = this.service.getSessionById(3);
    var y = {
      id:0,
      name:"",
      dateStart:new Date(),
      dateEnd:new Date(),
      duration:"",

    }
    
    console.log(x.toString());
  }

}
