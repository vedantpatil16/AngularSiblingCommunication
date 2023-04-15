import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() public MessageFromParent = "";

  @Output() public Myevent = new EventEmitter;

  public SendMessage()
  {
    this.Myevent.emit("Hello from Child")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
