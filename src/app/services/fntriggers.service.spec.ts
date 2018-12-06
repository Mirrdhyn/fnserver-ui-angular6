import { TestBed } from '@angular/core/testing';

import { FntriggersService } from './fntriggers.service';

describe('FntriggersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FntriggersService = TestBed.get(FntriggersService);
    expect(service).toBeTruthy();
  });
});
