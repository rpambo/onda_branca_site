import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnAir } from './on-air';

describe('OnAir', () => {
  let component: OnAir;
  let fixture: ComponentFixture<OnAir>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnAir]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnAir);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
