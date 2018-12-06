import { TestBed } from '@angular/core/testing';

import { FnappsService } from './fnapps.service';

describe('FnappsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FnappsService = TestBed.get(FnappsService);
    expect(service).toBeTruthy();
  });
});
