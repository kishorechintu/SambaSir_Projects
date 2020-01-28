import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-childthree",
  templateUrl: "./childthree.component.html",
  styles: []
})
export class ChildthreeComponent implements OnInit {
  private var_six;
  constructor() {
    this.var_six = "I'm Child Three..!!!";
  }

  ngOnInit() {}
}
