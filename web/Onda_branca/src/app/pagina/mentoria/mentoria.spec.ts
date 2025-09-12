import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mentoria } from './mentoria';

describe('Mentoria', () => {
  let component: Mentoria;
  let fixture: ComponentFixture<Mentoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mentoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mentoria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
