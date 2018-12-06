import { TestBed } from '@angular/core/testing';

import { FncallsService } from './fncalls.service';

describe('FncallsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FncallsService = TestBed.get(FncallsService);
    expect(service).toBeTruthy();
  });
});
