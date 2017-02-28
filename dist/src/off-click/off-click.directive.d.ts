import { ElementRef, OnDestroy, EventEmitter } from '@angular/core';
export declare class OffClickDirective implements OnDestroy {
    private el;
    offClick: EventEmitter<Event>;
    private subscription;
    private documentBodyElement;
    private baseElement;
    constructor(el: ElementRef);
    private clickHandler(currentElement, event);
    ngOnDestroy(): void;
}
