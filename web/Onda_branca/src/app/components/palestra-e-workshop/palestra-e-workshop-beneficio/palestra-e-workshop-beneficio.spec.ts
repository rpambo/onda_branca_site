import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalestraEWorkshopBeneficio } from './palestra-e-workshop-beneficio';

describe('PalestraEWorkshopBeneficio', () => {
  let component: PalestraEWorkshopBeneficio;
  let fixture: ComponentFixture<PalestraEWorkshopBeneficio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PalestraEWorkshopBeneficio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalestraEWorkshopBeneficio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
