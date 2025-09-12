import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtuacaoGestaoDeSaudeMentalParaEmpresa } from './atuacao-gestao-de-saude-mental-para-empresa';

describe('AtuacaoGestaoDeSaudeMentalParaEmpresa', () => {
  let component: AtuacaoGestaoDeSaudeMentalParaEmpresa;
  let fixture: ComponentFixture<AtuacaoGestaoDeSaudeMentalParaEmpresa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtuacaoGestaoDeSaudeMentalParaEmpresa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtuacaoGestaoDeSaudeMentalParaEmpresa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
