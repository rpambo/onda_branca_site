import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalestraEWorkshopAnsiedade } from './palestra-e-workshop-ansiedade';

describe('PalestraEWorkshopAnsiedade', () => {
  let component: PalestraEWorkshopAnsiedade;
  let fixture: ComponentFixture<PalestraEWorkshopAnsiedade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PalestraEWorkshopAnsiedade]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalestraEWorkshopAnsiedade);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
