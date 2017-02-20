import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {OffClickModule} from '../index';
import { CommonModule } from '@angular/common'

@NgModule({
  imports: [
    OffClickModule,
    BrowserModule,
    CommonModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
