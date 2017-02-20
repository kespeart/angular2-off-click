"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], OffClickDirective.prototype, "offClick", void 0);
    OffClickDirective = __decorate([
        core_1.Directive({ selector: '[offClick]' }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], OffClickDirective);
    return OffClickDirective;
}());
exports.OffClickDirective = OffClickDirective;
//# sourceMappingURL=off-click.directive.js.map