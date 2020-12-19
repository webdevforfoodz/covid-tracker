import { TestBed } from '@angular/core/testing';

import { GetHistoricalDataService } from './get-historical-data.service';

describe('GetHistoricalDataService', () => {
  let service: GetHistoricalDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetHistoricalDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
