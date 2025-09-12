import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaGinasticaLaboralImplementar } from './programa-ginastica-laboral-implementar';

describe('ProgramaGinasticaLaboralImplementar', () => {
  let component: ProgramaGinasticaLaboralImplementar;
  let fixture: ComponentFixture<ProgramaGinasticaLaboralImplementar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramaGinasticaLaboralImplementar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramaGinasticaLaboralImplementar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
