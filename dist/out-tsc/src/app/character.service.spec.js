import { TestBed } from '@angular/core/testing';
import { CharacterService } from './character.service';
describe('CharacterService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(CharacterService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=character.service.spec.js.map