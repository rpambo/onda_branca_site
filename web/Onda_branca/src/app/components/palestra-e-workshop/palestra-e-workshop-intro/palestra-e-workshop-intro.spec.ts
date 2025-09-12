import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalestraEWorkshopIntro } from './palestra-e-workshop-intro';

describe('PalestraEWorkshopIntro', () => {
  let component: PalestraEWorkshopIntro;
  let fixture: ComponentFixture<PalestraEWorkshopIntro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PalestraEWorkshopIntro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalestraEWorkshopIntro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
