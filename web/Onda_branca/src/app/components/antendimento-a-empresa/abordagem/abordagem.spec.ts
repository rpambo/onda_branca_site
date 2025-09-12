import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Abordagem } from './abordagem';

describe('Abordagem', () => {
  let component: Abordagem;
  let fixture: ComponentFixture<Abordagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Abordagem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Abordagem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
