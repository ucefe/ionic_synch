import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Contacts } from '@ionic-native/contacts'
import { IonicModule } from '@ionic/angular';

import { TaskPageRoutingModule } from './task-routing.module';

import { TaskPage } from './task.page';
import { IonicSelectableModule } from 'ionic-selectable';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskPageRoutingModule,
    IonicSelectableModule

  ],
  declarations: [TaskPage]
  
})
export class TaskPageModule {}
