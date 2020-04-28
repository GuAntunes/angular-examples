import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver() {
    // this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
    this.backGroundColor = 'yellow';
  }

  //Permite fazer a associação de um evento do html
  @HostListener('mouseleave') onMouseLeave() {
    // this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'white');
    this.backGroundColor = 'white';
  }

  //Permite fazer a associação de uma propriedade do html para uma variavel
  @HostBinding('style.backgroundColor') backGroundColor: string;

  constructor(
    // private _elementRef: ElementRef,
    // private _renderer: Renderer2
    ) 
    { }

}
