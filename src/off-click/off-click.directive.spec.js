"use strict";
var app_module_1 = require('../app/app.module');
var testing_1 = require('@angular/core/testing');
var app_component_1 = require('../app/app.component');
var platform_browser_1 = require('@angular/platform-browser');
var off_click_directive_1 = require('./off-click.directive');
describe('off click unit test', function () {
    var fixture;
    var des;
    var mainElement;
    beforeEach(function () {
        fixture = testing_1.TestBed.configureTestingModule({
            imports: [app_module_1.AppModule]
        }).createComponent(app_component_1.AppComponent);
        fixture.detectChanges();
        des = fixture.debugElement.queryAll(platform_browser_1.By.directive(off_click_directive_1.OffClickDirective));
        mainElement = fixture.debugElement.queryAll(platform_browser_1.By.css('main'));
    });
    it('should emit an event when the user click outside the directive element click', function () {
        var event = null;
        var dir = des[1].injector.get(off_click_directive_1.OffClickDirective);
        dir.offClick.subscribe(function (_event) { return event = _event; });
        mainElement[0].nativeElement.click();
        expect(event).toBeTruthy();
        expect(typeof event.stopPropagation).toEqual('function');
    });
    it('should not emit an event when the user click on the element', function () {
        var event = null;
        var dir = des[0].injector.get(off_click_directive_1.OffClickDirective);
        dir.offClick.subscribe(function (_event) { return event = _event; });
        des[0].nativeElement.click();
        expect(event).toBeFalsy();
    });
});
//# sourceMappingURL=off-click.directive.spec.js.map