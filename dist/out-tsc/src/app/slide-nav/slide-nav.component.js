import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { PageService } from '../page.service';
var SlideNavComponent = /** @class */ (function () {
    function SlideNavComponent(pageService) {
        this.pageService = pageService;
    }
    SlideNavComponent.prototype.ngOnInit = function () {
        if (this.loadDefault) {
            this.loadRoute(this.routes[0]);
        }
    };
    SlideNavComponent.prototype.loadRoute = function (route) {
        this.pageService.navigate(route.path, {});
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], SlideNavComponent.prototype, "routes", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], SlideNavComponent.prototype, "loadDefault", void 0);
    SlideNavComponent = tslib_1.__decorate([
        Component({
            selector: 'app-slide-nav',
            templateUrl: './slide-nav.component.html',
            styleUrls: ['./slide-nav.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [PageService])
    ], SlideNavComponent);
    return SlideNavComponent;
}());
export { SlideNavComponent };
//# sourceMappingURL=slide-nav.component.js.map