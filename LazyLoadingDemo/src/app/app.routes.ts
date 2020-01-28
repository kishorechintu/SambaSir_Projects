import { Routes, RouterModule } from "@angular/router";
import { PageoneComponent } from "./pageone.component";
import { AuthGuards } from "./auth.guards";
import { CountriesModule } from "./countries.module";
import { ModuleWithProviders } from "@angular/core";
export const appRoutes: Routes = [
  { path: "page_one", component: PageoneComponent },
  {
    path: "lazy",
    loadChildren: "./countries.module#CountriesModule",
    canLoad: [AuthGuards]
  }
];
export const lazyRoutes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
