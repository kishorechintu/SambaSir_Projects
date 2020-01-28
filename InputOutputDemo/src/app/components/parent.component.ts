import { Component, OnInit } from "@angular/core";

@Component({
  selector: "parent",
  templateUrl: "./parent.component.html",
  styles: []
})
export class ParentComponent implements OnInit {
  private data: Array<any> = [
    { p_id: 111, p_name: "P One", p_cost: 10000 },
    { p_id: 222, p_name: "P two", p_cost: 20000 },
    { p_id: 333, p_name: "P three", p_cost: 30000 },
    { p_id: 444, p_name: "P four", p_cost: 40000 },
    { p_id: 555, p_name: "P five", p_cost: 50000 }
  ];
  constructor() {}
  public receiveData(arg1: any) {
    alert(arg1);
  }

  ngOnInit() {}
}
