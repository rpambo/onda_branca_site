import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoGestaoDeSaudeMentalParaEmpresa } from './contacto-gestao-de-saude-mental-para-empresa';

describe('ContactoGestaoDeSaudeMentalParaEmpresa', () => {
  let component: ContactoGestaoDeSaudeMentalParaEmpresa;
  let fixture: ComponentFixture<ContactoGestaoDeSaudeMentalParaEmpresa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoGestaoDeSaudeMentalParaEmpresa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoGestaoDeSaudeMentalParaEmpresa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
