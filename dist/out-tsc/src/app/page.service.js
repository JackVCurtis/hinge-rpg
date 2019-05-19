import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterService } from './character.service';
var PageService = /** @class */ (function () {
    function PageService(router, characterService) {
        this.router = router;
        this.characterService = characterService;
        this.groups.CHARACTER = [
            {
                path: 'characters',
                label: 'All',
                context: {}
            },
            {
                path: '/characters/{id}',
                label: '{name}',
                contextProvider: function () {
                    return characterService.ac;
                }
            }
        ];
    }
    PageService.prototype.navigate = function (path) {
        var compiledPath = this.compilePath(path, context);
        this.router.navigate([compiledPath]);
    };
    PageService.prototype.compilePath = function (path, context) {
        return path.replace(/\[.*?\]/, function (match) {
            return context.match;
        });
    };
    PageService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Router, CharacterService])
    ], PageService);
    return PageService;
}());
export { PageService };
//# sourceMappingURL=page.service.js.map