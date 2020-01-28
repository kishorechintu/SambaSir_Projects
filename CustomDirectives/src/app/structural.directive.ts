import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";
@Directive({
  selector: "[hello]"
})
export class StructuralDirective {
  constructor(private tr: TemplateRef<any>, private vcr: ViewContainerRef) {}
  @Input() set hello(arg1: boolean) {
    if (arg1) {
      this.vcr.createEmbeddedView(this.tr);
    } else {
      this.vcr.clear();
    }
  }
}
