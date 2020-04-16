export class Schedule {
id: number;
name:string="";
type:string;
contact: string="";
date:Date;
time :{
    h:number;
    m:number
};
selected:boolean;
message:string="";
waiting:boolean=true;

}
