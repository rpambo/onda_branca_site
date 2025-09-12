import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoDeSaudeMentalParaEmpresa } from './gestao-de-saude-mental-para-empresa';

describe('GestaoDeSaudeMentalParaEmpresa', () => {
  let component: GestaoDeSaudeMentalParaEmpresa;
  let fixture: ComponentFixture<GestaoDeSaudeMentalParaEmpresa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestaoDeSaudeMentalParaEmpresa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestaoDeSaudeMentalParaEmpresa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
