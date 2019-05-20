import { TestBed } from '@angular/core/testing';
import { CalcService } from './calc.service';
describe('CalcService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(CalcService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=calc.service.spec.js.map