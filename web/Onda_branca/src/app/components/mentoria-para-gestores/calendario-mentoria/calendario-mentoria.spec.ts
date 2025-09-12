import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioMentoria } from './calendario-mentoria';

describe('CalendarioMentoria', () => {
  let component: CalendarioMentoria;
  let fixture: ComponentFixture<CalendarioMentoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarioMentoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarioMentoria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
