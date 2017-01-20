import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[highlight]'
})
export class HighLightDirective {

    @Input() color: string = 'yellow';

    constructor(private el: ElementRef) {
        console.log(el);
        //el.nativeElement.style.background = 'yellow';
    }

    @HostListener('mouseover')
    mouseover() {
        this.el.nativeElement.style.background = this.color;
    }

    @HostListener('mouseout')
    mouseout() {
        this.el.nativeElement.style.background = 'none';
    }
}
