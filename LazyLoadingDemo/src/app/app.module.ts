import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PageoneComponent } from "./pageone.component";
import { IndexComponent } from "./index.component";
import { lazyRoutes } from "./app.routes";

@NgModule({
  declarations: [AppComponent, PageoneComponent, IndexComponent],
  imports: [BrowserModule, AppRoutingModule, lazyRoutes],
  providers: [],
  bootstrap: [IndexComponent]
})
export class AppModule {}
