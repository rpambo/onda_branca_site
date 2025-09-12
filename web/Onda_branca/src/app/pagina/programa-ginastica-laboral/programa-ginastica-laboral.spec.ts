import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaGinasticaLaboral } from './programa-ginastica-laboral';

describe('ProgramaGinasticaLaboral', () => {
  let component: ProgramaGinasticaLaboral;
  let fixture: ComponentFixture<ProgramaGinasticaLaboral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramaGinasticaLaboral]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramaGinasticaLaboral);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
