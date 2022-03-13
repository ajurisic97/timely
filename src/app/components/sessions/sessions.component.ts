import { Component, OnInit } from '@angular/core';
import { Session } from './../../models/Session'
@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {
  sessions!:Session[];

  constructor() { }

  ngOnInit(): void {
    const d = new Date()
    this.sessions=[
      {
        start: d.toTimeString(),
        stop:d,
        duration:"5 sec"
      },
      {
        start: d.toTimeString(),
        stop:d,
        duration:"10 sec"
      }
    ]
  }
  deleteSession (id:number) {
    this.sessions=this.sessions.filter((v,i) => i!==id);
  }

}
