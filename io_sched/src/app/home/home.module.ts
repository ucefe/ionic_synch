import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { MenuComponent } from './menu/menu.component';
import { SegmentComponent } from './segment/segment.component';
import { SucceedComponent } from './succeed/succeed.component';
import { WaitingComponent } from './waiting/waiting.component';
import { AddtaskComponent } from './Add-button/addtask.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    
  ],
  declarations: [HomePage,MenuComponent,SegmentComponent,SucceedComponent,WaitingComponent,AddtaskComponent]
})
export class HomePageModule {}
