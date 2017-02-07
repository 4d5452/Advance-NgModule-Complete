import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[highlight], input' })
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'gold';
    console.log(
      `* Shared highlight called for ${el.nativeElement.tagName}`);
  }
}
