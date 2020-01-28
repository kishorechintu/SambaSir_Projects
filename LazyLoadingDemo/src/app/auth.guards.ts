import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root"
})
export class AuthGuards {
  canLoad(): boolean {
    return confirm("Do You want to enter into Lazily loaded Module ..?");
  }
}
