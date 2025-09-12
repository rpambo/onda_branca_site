import { TestBed } from '@angular/core/testing';

import { Pub } from './pub';

describe('Pub', () => {
  let service: Pub;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pub);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});