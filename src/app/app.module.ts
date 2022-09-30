import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DraggableComponent } from './home/draggable/draggable.component';
import { MyTerminalComponent } from './home/terminal/terminal.component';
import { TerminalModule } from 'primeng/terminal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TvwidgetComponent } from './tvwidget/tvwidget.component';
import { LcwwidgetComponent } from './lcwwidget/lcwwidget.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DraggableComponent,
    MyTerminalComponent,
    TvwidgetComponent,
    LcwwidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TerminalModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
