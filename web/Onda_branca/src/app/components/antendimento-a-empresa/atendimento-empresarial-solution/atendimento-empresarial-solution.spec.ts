import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendimentoEmpresarialSolution } from './atendimento-empresarial-solution';

describe('AtendimentoEmpresarialSolution', () => {
  let component: AtendimentoEmpresarialSolution;
  let fixture: ComponentFixture<AtendimentoEmpresarialSolution>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtendimentoEmpresarialSolution]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtendimentoEmpresarialSolution);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
