import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seachs } from './seachs';

describe('Seachs', () => {
  let component: Seachs;
  let fixture: ComponentFixture<Seachs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seachs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seachs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
