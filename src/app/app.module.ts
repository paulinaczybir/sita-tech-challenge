import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';


import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CommentsTableComponent } from './components/comments-table/comments-table.component';
import { FlightComponent } from './components/flight/flight.component';
import { NewCommentFormComponent } from './components/new-comment-form/new-comment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    CommentsTableComponent,
    FlightComponent,
    NewCommentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSidenavModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
