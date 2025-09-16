import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaDeSaudeMentalPilares } from './programa-de-saude-mental-pilares';

describe('ProgramaDeSaudeMentalPilares', () => {
  let component: ProgramaDeSaudeMentalPilares;
  let fixture: ComponentFixture<ProgramaDeSaudeMentalPilares>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramaDeSaudeMentalPilares]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramaDeSaudeMentalPilares);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
