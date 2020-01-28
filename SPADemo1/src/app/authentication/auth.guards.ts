import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root"
})
export class AuthGuards {
  canActivate(): boolean {
    return confirm("Do u Want to Enter into First Component");
  }
  canDeactivate(): boolean {
    return confirm("Do u Want to leave second Component");
  }
  canActivateChild(): boolean {
    return confirm("Do u Want to Enter into Child Three Component!!");
  }
}
