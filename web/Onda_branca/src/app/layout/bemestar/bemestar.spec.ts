import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bemestar } from './bemestar';

describe('Bemestar', () => {
  let component: Bemestar;
  let fixture: ComponentFixture<Bemestar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bemestar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bemestar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
