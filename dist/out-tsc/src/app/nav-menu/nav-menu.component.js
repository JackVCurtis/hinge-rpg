import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent() {
    }
    NavMenuComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], NavMenuComponent.prototype, "title", void 0);
    NavMenuComponent = tslib_1.__decorate([
        Component({
            selector: 'app-nav-menu',
            templateUrl: './nav-menu.component.html',
            styleUrls: ['./nav-menu.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], NavMenuComponent);
    return NavMenuComponent;
}());
export { NavMenuComponent };
//# sourceMappingURL=nav-menu.component.js.map