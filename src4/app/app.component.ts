import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
  public Name = "";
  public sname:any = [];

  EventListen()
  {
    this.Name=this.sname;
    return this.Name;
  }

}
