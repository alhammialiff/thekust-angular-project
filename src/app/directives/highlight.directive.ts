import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';


@Directive({
  // Whenever we wanna use this directive in our template, we use [appHighlight]
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef, 
    private renderer: Renderer2) { }

  @HostListener('mouseenter') 
  onMouseEnter(){
    // Applying 'highlight' class when mouse has moved into the region
    this.renderer.addClass(this.el.nativeElement, 'highlight');
  }

  @HostListener('mouseleave') 
  onMouseLeave(){
    // Removing 'highlight' class when mouse has moved out the region
    this.renderer.removeClass(this.el.nativeElement, 'highlight');
  }

}
