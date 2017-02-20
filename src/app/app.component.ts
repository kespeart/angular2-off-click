import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  offClick1: boolean;
  offClick2: boolean;
  offClick3: boolean;

  constructor(){
    this.offClick1 = this.offClick2 = this.offClick3 = false;
  }
// TODO write spec

  offClick(event: Event, type: number){
    switch(type.toString()){
      case '1':   this.offClick1 = !this.offClick1;
       break;
      case '2':   this.offClick2 = !this.offClick2;
        break;
      case '3':   this.offClick3 = !this.offClick3;
        break;
    }

  }

}
