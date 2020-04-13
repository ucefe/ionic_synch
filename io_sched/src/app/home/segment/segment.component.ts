import { Component, OnInit, EventEmitter, Output, ViewChild, AfterViewInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { WaitingComponent } from '../waiting/waiting.component';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.scss'],
})
export class SegmentComponent implements OnInit {


  @Output() messageEvent = new EventEmitter<string>();

  message: any= NgModel;
  Select: string;



  constructor() {

this.Select="waiting"; 
  }

  

  segmentChanged(ev: any) {
    this.messageEvent.emit(this.message);}

  ngOnInit() { 
  }

 

}