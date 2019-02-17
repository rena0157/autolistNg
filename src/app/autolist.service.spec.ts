import { TestBed } from '@angular/core/testing';

import { AutolistService } from './autolist.service';

describe('AutolistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutolistService = TestBed.get(AutolistService);
    expect(service).toBeTruthy();
  });

  it('should return a number from a length', () => {
      const service: AutolistService = TestBed.get(AutolistService);
      const testString = 'length 200.2';
      expect(service.getDoubles(testString, service.linesRegex)).toBeCloseTo(200.2);
  });

  it('should return a number from an area', () => {
      const service: AutolistService = TestBed.get(AutolistService);
      const testString = 'Area 200.2';
      expect(service.getDoubles(testString, service.hatchesRegex)).toBeCloseTo(200.2);
  });
});
