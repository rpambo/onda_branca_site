import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Publicao } from './publicao';

describe('Publicao', () => {
  let component: Publicao;
  let fixture: ComponentFixture<Publicao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Publicao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Publicao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
