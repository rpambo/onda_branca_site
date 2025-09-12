import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalestraEWorkshopQualidade } from './palestra-e-workshop-qualidade';

describe('PalestraEWorkshopQualidade', () => {
  let component: PalestraEWorkshopQualidade;
  let fixture: ComponentFixture<PalestraEWorkshopQualidade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PalestraEWorkshopQualidade]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalestraEWorkshopQualidade);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
