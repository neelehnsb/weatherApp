import { TestBed } from '@angular/core/testing';

import { OpencageGeocodingService } from './opencage-geocoding.service';

describe('OpencageGeocodingService', () => {
  let service: OpencageGeocodingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpencageGeocodingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
