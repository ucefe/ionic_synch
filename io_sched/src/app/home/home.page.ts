import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage{

 


constructor() { }


message:string;

receiveMessage($event) {
  this.message = $event
  console.log(this.message);
}

}
  


