import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaGinasticaLaboralPrograma } from './programa-ginastica-laboral-programa';

describe('ProgramaGinasticaLaboralPrograma', () => {
  let component: ProgramaGinasticaLaboralPrograma;
  let fixture: ComponentFixture<ProgramaGinasticaLaboralPrograma>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramaGinasticaLaboralPrograma]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramaGinasticaLaboralPrograma);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
