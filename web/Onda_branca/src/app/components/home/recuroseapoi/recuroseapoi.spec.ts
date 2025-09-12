import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recuroseapoi } from './recuroseapoi';

describe('Recuroseapoi', () => {
  let component: Recuroseapoi;
  let fixture: ComponentFixture<Recuroseapoi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Recuroseapoi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Recuroseapoi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
