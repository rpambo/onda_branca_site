import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaDeSaudeMentalSolucao } from './programa-de-saude-mental-solucao';

describe('ProgramaDeSaudeMentalSolucao', () => {
  let component: ProgramaDeSaudeMentalSolucao;
  let fixture: ComponentFixture<ProgramaDeSaudeMentalSolucao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramaDeSaudeMentalSolucao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramaDeSaudeMentalSolucao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
