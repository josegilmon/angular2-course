import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[highlight]'
})
export class HighLightDirective {

    private oldBorder: string;

    @Input() color: string = 'yellow';

    constructor(private el: ElementRef) {
        this.oldBorder = el.nativeElement.style.border;
    }

    @HostListener('mouseover')
    mouseover() {
        this.el.nativeElement.style.border = `5px solid ${this.color}`;
        //this.el.nativeElement.style.background = this.color;
    }

    @HostListener('mouseout')
    mouseout() {
        this.el.nativeElement.style.border = this.oldBorder;
        this.el.nativeElement.style.background = '';
    }
}
