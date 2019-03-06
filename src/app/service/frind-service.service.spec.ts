import { TestBed } from '@angular/core/testing';

import { FrindServiceService } from './frind-service.service';

describe('FrindServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FrindServiceService = TestBed.get(FrindServiceService);
    expect(service).toBeTruthy();
  });
});
