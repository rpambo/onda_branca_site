import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafiosEmpresas } from './desafios-empresas';

describe('DesafiosEmpresas', () => {
  let component: DesafiosEmpresas;
  let fixture: ComponentFixture<DesafiosEmpresas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesafiosEmpresas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesafiosEmpresas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
