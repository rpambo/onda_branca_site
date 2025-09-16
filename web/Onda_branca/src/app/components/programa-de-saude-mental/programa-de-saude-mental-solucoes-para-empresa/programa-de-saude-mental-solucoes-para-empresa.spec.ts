import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaDeSaudeMentalSolucoesParaEmpresa } from './programa-de-saude-mental-solucoes-para-empresa';

describe('ProgramaDeSaudeMentalSolucoesParaEmpresa', () => {
  let component: ProgramaDeSaudeMentalSolucoesParaEmpresa;
  let fixture: ComponentFixture<ProgramaDeSaudeMentalSolucoesParaEmpresa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramaDeSaudeMentalSolucoesParaEmpresa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramaDeSaudeMentalSolucoesParaEmpresa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
