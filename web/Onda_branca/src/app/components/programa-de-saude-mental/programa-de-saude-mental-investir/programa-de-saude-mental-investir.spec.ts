import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaDeSaudeMentalInvestir } from './programa-de-saude-mental-investir';

describe('ProgramaDeSaudeMentalInvestir', () => {
  let component: ProgramaDeSaudeMentalInvestir;
  let fixture: ComponentFixture<ProgramaDeSaudeMentalInvestir>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramaDeSaudeMentalInvestir]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramaDeSaudeMentalInvestir);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
