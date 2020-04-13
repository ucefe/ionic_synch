import { Injectable } from '@angular/core';
import { Schedule } from '../model/schedule';
import { Storage} from '@ionic/storage';
import { AlertController } from '@ionic/angular';
const SCH_KEY='jnwfiuwrfhfnwewfhwrkfb';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private _db:Storage,public alertController: AlertController) { 
  }
  async showMessageOkCancel(title, message) {
    let choice
    const alert = await this.alertController.create({
        header: title,
        subHeader: message,
        buttons: [{
            text: 'Yes',
            handler: () => {
                alert.dismiss(true)
                return false
            }
        }, {
            text: 'Cancel',
            handler: () => {
                alert.dismiss(false);
                return false;
            }
        }]
    });

    await alert.present();
    await alert.onDidDismiss().then((data) => {
        choice = data
    })
    return choice
}



addschedule(s: Schedule): Promise<any> {
return this._db.get(SCH_KEY).then((schedules: Schedule[])=>{
if (schedules){
  schedules.push(s);
  return this._db.set(SCH_KEY,schedules);
}
else{
  return this._db.set(SCH_KEY,[s]);
}

});
}

getallschedule(): Promise<any> {
return this._db.get(SCH_KEY);
}

setschedule(s : Schedule): Promise<any> {
  return this._db.get(SCH_KEY).then((schedules: Schedule[])=>{
    if (!schedules){
      return null
    }
    else{ let updated : Schedule[]=[];
      for(let i of schedules ){
        if (i.id===s.id)
        updated.push(s);
        else{
          updated.push(i);
        }
    }
return this._db.set(SCH_KEY,updated);
}
});
}

removeschedule(s: Schedule): Promise<any> {
  return this._db.get(SCH_KEY).then((schedules: Schedule[])=>{
    if (!schedules){
      return null
    }
    else{ let removed : Schedule[]=[];
      for(let i of schedules ){
        if (i.id!==s.id)
        removed.push(i);
       
        
    }
return this._db.set(SCH_KEY,removed);
}
});
  

}



}
