import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statics } from './statics';

describe('Statics', () => {
  let component: Statics;
  let fixture: ComponentFixture<Statics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Statics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Statics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
