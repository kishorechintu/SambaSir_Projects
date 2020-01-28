import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AttrDirective } from "./app.directive";
import { StructuralDirective } from "./structural.directive";

@NgModule({
  declarations: [AppComponent, AttrDirective,StructuralDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
