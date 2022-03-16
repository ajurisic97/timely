import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

}
