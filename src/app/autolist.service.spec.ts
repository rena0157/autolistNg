import { TestBed } from '@angular/core/testing';

import { AutolistService } from './autolist.service';

describe('AutolistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutolistService = TestBed.get(AutolistService);
    expect(service).toBeTruthy();
  });

  it('should return 200.2', () => {
      const service: AutolistService = TestBed.get(AutolistService);
      const testString = 'length 200.2';
      expect(service.getDoubles(testString, service.linesRegex)).toBeCloseTo(200.2);
  })
});
