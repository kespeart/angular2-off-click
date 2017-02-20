import {AppModule} from '../app/app.module';
import {TestBed, ComponentFixture} from '@angular/core/testing';
import {AppComponent} from '../app/app.component';
import {By} from '@angular/platform-browser';
import {OffClickDirective} from './off-click.directive';
import {DebugElement} from '@angular/core';


describe('off click unit test', () => {

    let fixture: ComponentFixture<AppComponent>;
    let des: Array<DebugElement>;
    let mainElement: Array<DebugElement>;

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            imports: [AppModule]
        }).createComponent(AppComponent);

        fixture.detectChanges();

        des = fixture.debugElement.queryAll(By.directive(OffClickDirective));
        mainElement = fixture.debugElement.queryAll(By.css('main'));
    });

    it('should emit an event when the user click outside the directive element click', () => {
        let event: Event = null;
        let dir: OffClickDirective = des[1].injector.get(OffClickDirective) as OffClickDirective;
        dir.offClick.subscribe((_event: Event) => event = _event);
        mainElement[0].nativeElement.click();
        expect(event).toBeTruthy();
        expect(typeof event.stopPropagation).toEqual('function');
    });

    it('should not emit an event when the user click on the element', () => {
        let event: Event = null;
        let dir: OffClickDirective = des[0].injector.get(OffClickDirective) as OffClickDirective;
        dir.offClick.subscribe((_event: Event) => event = _event);
        des[0].nativeElement.click();
        expect(event).toBeFalsy();
    });
});


