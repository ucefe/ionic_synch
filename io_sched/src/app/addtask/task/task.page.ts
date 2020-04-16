import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { Schedule } from 'src/app/model/schedule';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StorageService } from 'src/app/services/storage.service';
import { Contacts, Contact, ContactField, ContactName, IContactFindOptions, ContactFieldType } from '@ionic-native/contacts/ngx';
import { IonicSelectableComponent } from 'ionic-selectable';
import { scheduled } from 'rxjs';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Platform } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';


@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})

export class TaskPage implements OnInit {
  title :string;
  sch:Schedule= <Schedule>{};

 mycontacts : Contact []=[];
TIME: Date ;
 

  constructor(
    private LocalNotifications : LocalNotifications,
    private activateRoute:ActivatedRoute, 
    private router :Router,
    private service: StorageService,
    private contacts: Contacts,
    private route: ActivatedRoute,
    private plt :Platform,
    private callNumber : CallNumber,
    private _db: StorageService
     ) {   
// this.sch.id=48397439;  
  // this.loadcontact('');
  // this.route.queryParams.subscribe(params => {
  //   if (this.router.getCurrentNavigation().extras.state) {
  //     this.sch = this.router.getCurrentNavigation().extras.state.s;
  //   }
  // });
  

  this.plt.ready().then(()=>{
    this.LocalNotifications.on('trigger').subscribe(res =>{
      this._db.showMessageOkCancel(res.data.type,res.data.msg );

      if( res.data.type==="Call"){
       this.callNumber.callNumber(res.data.contact,true)
       .then(res => console.log('Launched dialer!', res))
       .catch(err => console.log('Error launching dialer', err));}
    })
 });

     }

     
a(){
  console.log(this.TIME);
}
     Dateformat(x){
       console.log(x);
     }

     converTime(t){
       let v = new Date(t);
      //  this.sch.time[] =v.getSeconds();
      // //  this.sch.time.push(v.getHours());

      let s={
        h : v.getHours(),
        m: v.getMinutes()}
    return s;
    }

     




 loadcontact(q) {
  this.contacts.find(['*'] , {filter :q ,multiple:true, hasPhoneNumber:true})
  .then((contacts :Contact [])=> {
  this.mycontacts=contacts;
  });
  
        }

     myfct() {
      if (this.sch.id===undefined){
         if((this.sch.date!==undefined) && (this.sch.contact!=="" )) {
        this.sch.id=Date.now();
        this.sch.type=this.title;
        this.sch.time=this.converTime(this.TIME);
        this.sch.waiting=true;
      this.service.addschedule(this.sch).then(()=>{
       
       
        this.LocalNotifications.schedule({
          id:this.sch.id,
          data: {type:this.sch.type,contact:this.sch.contact,msg:this.sch.message },
          trigger: {at: new Date(this.TIME) }
        });
        
        return this.router.navigate(['']);
     
      }) ;  
      }
    else console.log('remplir tous');}
else
{ 
  this.service.setschedule(this.sch);
  return this.router.navigate(['']);
}
 
 
     }



  ngOnInit() { 


    this.activateRoute.paramMap.subscribe(paramMap=>{
   if(paramMap.has('type')){ 
     this.title=paramMap.get('type');
     if(this.title=="Call"){
      return document.getElementById('message').setAttribute("hidden","false");
   
     }
    if(this.title=="Sms"){
      }
    else{
       this.router.navigate(['']);
    }
    }

    })
 

   
       
  }

}
