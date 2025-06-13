import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testemunhos } from './testemunhos';

describe('Testemunhos', () => {
  let component: Testemunhos;
  let fixture: ComponentFixture<Testemunhos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testemunhos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testemunhos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
