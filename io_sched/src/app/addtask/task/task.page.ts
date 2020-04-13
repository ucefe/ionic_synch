import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { Schedule } from 'src/app/model/schedule';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StorageService } from 'src/app/services/storage.service';
import { Contacts, Contact, ContactField, ContactName, IContactFindOptions, ContactFieldType } from '@ionic-native/contacts/ngx';
import { IonicSelectableComponent } from 'ionic-selectable';
import { scheduled } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})

export class TaskPage implements OnInit {
  title :string;
  sch:Schedule= <Schedule>{};

 mycontacts : Contact []=[];

 

  constructor(
    private activateRoute:ActivatedRoute, 
    private router :Router,
    private service: StorageService,
    private contacts: Contacts,
    private route: ActivatedRoute
     ) {   
// this.sch.id=48397439;  
  // this.loadcontact('');
  this.route.queryParams.subscribe(params => {
    if (this.router.getCurrentNavigation().extras.state) {
      this.sch = this.router.getCurrentNavigation().extras.state.s;
    }
  });
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
        this.sch.waiting=true;
      this.service.addschedule(this.sch).then(()=>{
     
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

   
    //   portChange(event: {
    //     component: IonicSelectableComponent,
    //     value: any 
    // }) {
    //   this.loadcontact(event.value) ;   }
      // onKeyUp(ev){
      //   this.loadcontact(ev.target.value);
      // }

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
