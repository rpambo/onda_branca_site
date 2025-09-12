import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendimentoEmpresarialBeneficio } from './atendimento-empresarial-beneficio';

describe('AtendimentoEmpresarialBeneficio', () => {
  let component: AtendimentoEmpresarialBeneficio;
  let fixture: ComponentFixture<AtendimentoEmpresarialBeneficio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtendimentoEmpresarialBeneficio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtendimentoEmpresarialBeneficio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
