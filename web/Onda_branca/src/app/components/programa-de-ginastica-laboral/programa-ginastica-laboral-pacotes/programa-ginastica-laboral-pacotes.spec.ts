import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaGinasticaLaboralPacotes } from './programa-ginastica-laboral-pacotes';

describe('ProgramaGinasticaLaboralPacotes', () => {
  let component: ProgramaGinasticaLaboralPacotes;
  let fixture: ComponentFixture<ProgramaGinasticaLaboralPacotes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramaGinasticaLaboralPacotes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramaGinasticaLaboralPacotes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
