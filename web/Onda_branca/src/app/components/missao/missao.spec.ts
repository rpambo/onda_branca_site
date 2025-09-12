import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Missao } from './missao';

describe('Missao', () => {
  let component: Missao;
  let fixture: ComponentFixture<Missao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Missao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Missao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
