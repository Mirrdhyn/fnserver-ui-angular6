import { TestBed } from '@angular/core/testing';

import { FnlogsService } from './fnlogs.service';

describe('FnlogsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FnlogsService = TestBed.get(FnlogsService);
    expect(service).toBeTruthy();
  });
});
