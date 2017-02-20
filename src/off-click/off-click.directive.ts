import {Directive, ElementRef, OnDestroy, Output, EventEmitter} from '@angular/core';
import { Subscription, Observable} from 'rxjs'
@Directive({selector: '[offClick]'})

export class OffClickDirective implements OnDestroy {

    @Output()
    offClick:EventEmitter<Event> = new EventEmitter<Event>();

    private subscription: Subscription;
    private documentBodyElement: HTMLElement;
    private baseElement: HTMLElement;
    constructor(private el: ElementRef) {
        this.baseElement = this.el.nativeElement;
        this.documentBodyElement = document.body;
        this.subscription = Observable.fromEvent(document, 'click')
                                      .subscribe( (event: Event) => this.isOffClick(event.srcElement, event) )
    }

    private isOffClick(currentElement: HTMLElement | Element, event: Event): void {

        if(currentElement === this.documentBodyElement || currentElement == null) {
            this.offClick.emit(event);
            return;
        }

        if(currentElement === this.baseElement){
            return;
        }
        this.isOffClick(currentElement.parentElement, event);
    }


    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}