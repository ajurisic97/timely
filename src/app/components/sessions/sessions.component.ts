import { Component, OnInit } from '@angular/core';
import { Session } from './../../models/Session'
import * as moment from 'moment';
@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {
  sessions!:Session[];

  constructor() { }

  ngOnInit(): void {
  //   const d = new Date()
  //   const dateTime=d.toLocaleString();
  //   const d3 = new Date();
  //   //const d2 = d3.toLocaleString()+d.toLocaleDateString();
  //   const d2 = Math.abs(d3.getTime() - d.getTime()+5).toString() + "sec";

    
  //   this.sessions=[
  //     {
  //       start: dateTime,
  //       stop:dateTime,
  //       duration:d2
  //     },
  //     {
  //       start: dateTime,
  //       stop:dateTime,
  //       duration:d2
  //     }
  //   ]
  // }
  // deleteSession (id:number) {
  //   this.sessions=this.sessions.filter((v,i) => i!==id);
   }

}
