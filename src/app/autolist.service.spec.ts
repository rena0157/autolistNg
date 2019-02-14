import { TestBed } from '@angular/core/testing';

import { AutolistService } from './autolist.service';

describe('AutolistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutolistService = TestBed.get(AutolistService);
    expect(service).toBeTruthy();
  });
});
