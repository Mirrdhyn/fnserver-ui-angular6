import { TestBed } from '@angular/core/testing';

import { FnfunctionsService } from './fnfunctions.service';

describe('FnfunctionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FnfunctionsService = TestBed.get(FnfunctionsService);
    expect(service).toBeTruthy();
  });
});
