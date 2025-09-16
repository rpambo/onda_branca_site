import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermoDeUso } from './termo-de-uso';

describe('TermoDeUso', () => {
  let component: TermoDeUso;
  let fixture: ComponentFixture<TermoDeUso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermoDeUso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermoDeUso);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
