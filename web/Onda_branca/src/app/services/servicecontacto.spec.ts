import { TestBed } from '@angular/core/testing';

import { Servicecontacto } from './servicecontacto';

describe('Servicecontacto', () => {
  let service: Servicecontacto;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servicecontacto);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
