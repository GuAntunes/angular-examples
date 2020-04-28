import { Directive, HostListener, ElementRef, Renderer2, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'yellow';

  constructor() { }

  ngOnInit(): void {
    this.backGroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') onMouseOver() {
    this.backGroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backGroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backGroundColor: string;

}
