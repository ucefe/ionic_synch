import { Component, OnInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage{

 


constructor( ) {
 }


message:string;

receiveMessage($event) {
  this.message = $event
  console.log(this.message);
}

}
  


