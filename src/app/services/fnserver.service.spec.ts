import { TestBed } from '@angular/core/testing';

import { FnserverService } from './fnserver.service';

describe('FnserverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FnserverService = TestBed.get(FnserverService);
    expect(service).toBeTruthy();
  });
});
