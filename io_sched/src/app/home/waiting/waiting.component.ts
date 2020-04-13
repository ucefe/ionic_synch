import { Component, OnInit, ViewChild, OnChanges, SimpleChanges, AfterContentChecked, AfterViewInit, OnDestroy } from '@angular/core';
import { IonInfiniteScroll, Platform, AlertController } from '@ionic/angular';
import { Schedule } from 'src/app/model/schedule';
import { StorageService } from 'src/app/services/storage.service';
import { present } from '@ionic/core/dist/types/utils/overlays';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.scss'],
})
export class WaitingComponent implements OnInit {
 

schedules : Schedule[];
page = 0;
maxpage= 5;




public loadschedules(event?){
  this._db.getallschedule().then(s=>{
    this.schedules=s;
    if (event){


     event.target.complete();
    }
  });

  }

  loadData(event){
    this.page++;
    this.loadschedules(event);
if(this.page===this.maxpage){
 event.target.disabled=true;
}
  }
 

  constructor(private _db:StorageService, private plt:Platform, private router: Router,route:ActivatedRoute) {
    route.params.subscribe(val => {
      val.this.loadschedules();
      console.log("init");
    }); 
    this.plt.ready().then(()=>{
    this.loadschedules();
  });
   }



   delete(d :Schedule) {
    
    this._db.showMessageOkCancel("Are You Sure ?", " You want To Delete").then((res)=>{

if(res.data){
  this._db.removeschedule(d).then(()=>{
    this.loadschedules();
  });
} 
});
  }

  update(sch :Schedule){
    let navigationExtras: NavigationExtras = {
      state: {
       s:sch
      }
    };

    this.router.navigate(["task/"+sch.type], navigationExtras);
  }  

     
  

  
  ngOnInit() {
   
  }
  
  }
 

