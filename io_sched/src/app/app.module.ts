import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageModule } from './home/home.module';
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule } from '@angular/forms';
import { Contacts } from '@ionic-native/contacts/ngx';
import { TaskPageModule } from './addtask/task/task.module';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,FormsModule, IonicModule.forRoot(), AppRoutingModule, HomePageModule,TaskPageModule, IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Contacts,LocalNotifications,CallNumber
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
