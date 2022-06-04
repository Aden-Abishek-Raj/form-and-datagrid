import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 details:any=[];
 fnDelete(index){
    this.details.splice(index,1);
  }
 addDetails(){
    if(this.details.length<10){
    let name=(<HTMLInputElement>document.getElementById("name")).value;
    let salary=(<HTMLInputElement>document.getElementById("salary")).value;
    let temp={"Name":name,"Salary":salary};
    this.details.push(temp);}
  }
}