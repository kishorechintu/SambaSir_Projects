import { Component, OnInit, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "child",
  templateUrl: "./child.component.html",
  styles: []
})
export class ChildComponent implements OnInit {
  @Input() id;
  @Input() name;
  @Input() cost;

  @Output() send: EventEmitter<any> = new EventEmitter();

  sendData() {
    this.send.emit(this.id + "..." + this.name + "...." + this.cost);
  }

  constructor() {}

  ngOnInit() {}
}
