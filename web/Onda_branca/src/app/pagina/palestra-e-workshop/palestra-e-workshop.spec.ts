import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalestraEWorkshop } from './palestra-e-workshop';

describe('PalestraEWorkshop', () => {
  let component: PalestraEWorkshop;
  let fixture: ComponentFixture<PalestraEWorkshop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PalestraEWorkshop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalestraEWorkshop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
