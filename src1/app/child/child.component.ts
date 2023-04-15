import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() message = new EventEmitter;

  public AcceptData(value : any)
  {
     this.message.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
