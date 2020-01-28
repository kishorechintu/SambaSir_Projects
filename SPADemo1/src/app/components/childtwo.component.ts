import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-childtwo",
  templateUrl: "./childtwo.component.html",
  styles: []
})
export class ChildtwoComponent implements OnInit {
  private var_five;
  constructor() {
    this.var_five = "I'm Child Two...!!!";
  }

  ngOnInit() {}
}
