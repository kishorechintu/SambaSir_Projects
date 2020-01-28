import { Directive, ElementRef, HostListener, Input } from "@angular/core";
@Directive({
  selector: "[myDir]"
})
export class AttrDirective {
  @Input() var_one = "green";
  @Input() var_two = "white";
  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  @HostListener("mouseenter") onmouseenter() {
    this.applyColor(this.var_one);
  }
  @HostListener("mouseleave") onmouseleave() {
    this.applyColor(this.var_two);
  }
  public applyColor(arg1: any): void {
    this.el.nativeElement.style.backgroundColor = arg1;
  }
}
