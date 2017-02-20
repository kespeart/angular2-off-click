"use strict";
var core_1 = require('@angular/core');
var rxjs_1 = require('rxjs');
var OffClickDirective = (function () {
    function OffClickDirective(el) {
        var _this = this;
        this.el = el;
        this.offClick = new core_1.EventEmitter();
        this.baseElement = this.el.nativeElement;
        this.documentBodyElement = document.body;
        this.subscription = rxjs_1.Observable.fromEvent(document, 'click')
            .subscribe(function (event) { return _this.isOffClick(event.srcElement, event); });
    }
    OffClickDirective.prototype.isOffClick = function (currentElement, event) {
        if (currentElement === this.documentBodyElement || currentElement == null) {
            this.offClick.emit(event);
            return;
        }
        if (currentElement === this.baseElement) {
            return;
        }
        this.isOffClick(currentElement.parentElement, event);
    };
    OffClickDirective.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    OffClickDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: '[offClick]' },] },
    ];
    /** @nocollapse */
    OffClickDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    OffClickDirective.propDecorators = {
        'offClick': [{ type: core_1.Output },],
    };
    return OffClickDirective;
}());
exports.OffClickDirective = OffClickDirective;
//# sourceMappingURL=off-click.directive.js.map