import { TestBed } from '@angular/core/testing';

import { FirstVisit } from './first-visit';

describe('FirstVisit', () => {
  let service: FirstVisit;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstVisit);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
