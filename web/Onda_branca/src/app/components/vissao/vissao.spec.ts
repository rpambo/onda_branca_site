import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vissao } from './vissao';

describe('Vissao', () => {
  let component: Vissao;
  let fixture: ComponentFixture<Vissao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vissao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vissao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
