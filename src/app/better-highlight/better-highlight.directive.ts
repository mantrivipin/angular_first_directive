import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  
  ngOnInit(){
    // this.renderer.createText("Vipin Mantri");
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.renderer.addClass(this.elRef.nativeElement, 'vipin');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
  @HostListener('click') click(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;
}
