import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CustomDirectives";
  private tgl = true;
  private v_name = "hide";
  public toogle() {
    this.tgl = !this.tgl;
    if (this.v_name == "hide") {
      this.v_name = "Show";
    } else {
      this.v_name = "hide";
    }
  }
}
