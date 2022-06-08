import { TestBed } from '@angular/core/testing';

import { TranstractionService } from './transtraction.service';

describe('TranstractionService', () => {
  let service: TranstractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranstractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
