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
   }

}
