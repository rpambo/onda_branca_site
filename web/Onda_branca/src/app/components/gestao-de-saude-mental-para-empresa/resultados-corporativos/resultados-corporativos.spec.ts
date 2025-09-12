import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosCorporativos } from './resultados-corporativos';

describe('ResultadosCorporativos', () => {
  let component: ResultadosCorporativos;
  let fixture: ComponentFixture<ResultadosCorporativos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultadosCorporativos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosCorporativos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
