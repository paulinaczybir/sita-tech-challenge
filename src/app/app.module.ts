import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { SidenavComponent } from './sidenav/sidenav.component';
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
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
