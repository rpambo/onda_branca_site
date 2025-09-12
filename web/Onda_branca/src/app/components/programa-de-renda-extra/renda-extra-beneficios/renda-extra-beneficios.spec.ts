import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendaExtraBeneficios } from './renda-extra-beneficios';

describe('RendaExtraBeneficios', () => {
  let component: RendaExtraBeneficios;
  let fixture: ComponentFixture<RendaExtraBeneficios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RendaExtraBeneficios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendaExtraBeneficios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
