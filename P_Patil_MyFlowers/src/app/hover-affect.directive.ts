import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  constructor(public elementRef:ElementRef) { }
          ngOnInit():void{}
          @Input('appHoverAffect') hoverAffect:any;
          @HostListener('mouseenter') onMouseEnter(){
            this.elementRef.nativeElement.classList.add(this.hoverAffect);
          }
          @HostListener('mouseleave') onMouseLeave(){
            this.elementRef.nativeElement.classList.remove(this.hoverAffect);
          }

}
