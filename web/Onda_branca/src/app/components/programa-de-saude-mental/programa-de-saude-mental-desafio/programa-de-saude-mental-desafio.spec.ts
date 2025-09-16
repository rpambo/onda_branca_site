import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaDeSaudeMentalDesafio } from './programa-de-saude-mental-desafio';

describe('ProgramaDeSaudeMentalDesafio', () => {
  let component: ProgramaDeSaudeMentalDesafio;
  let fixture: ComponentFixture<ProgramaDeSaudeMentalDesafio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramaDeSaudeMentalDesafio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramaDeSaudeMentalDesafio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
