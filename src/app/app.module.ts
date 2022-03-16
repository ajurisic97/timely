import {HttpClientModule} from '@angular/common/http';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SessionsComponent } from './components/sessions/sessions.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddEditSessionComponent } from './components/sessions/add-edit-session/add-edit-session.component';
import { ShowSessionComponent } from './components/sessions/show-session/show-session.component';
import { SessionApiService } from './session-api.service';
@NgModule({
  declarations: [
    AppComponent,
    SessionsComponent,
    ShowSessionComponent,
    AddEditSessionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SessionApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
