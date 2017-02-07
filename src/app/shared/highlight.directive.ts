import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[highlight]' })
export class HighlightDirective {
  @Input('highlight') highlightColor: string;
  @Input() defaultColor: string;
  el: ElementRef;

  constructor(el: ElementRef) {
    this.el = el;
  }

  @HostListener('mouseenter') onmouseenter() {
    this.highlight(this.highlightColor || this.defaultColor || 'gold');
  }

  @HostListener('mouseleave') onmouseleave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    console.log(
      `* Shared highlight called for ${this.el.nativeElement.tagName}`);
  }

}
