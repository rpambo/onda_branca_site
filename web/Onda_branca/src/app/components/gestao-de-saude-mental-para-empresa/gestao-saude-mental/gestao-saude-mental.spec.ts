import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoSaudeMental } from './gestao-saude-mental';

describe('GestaoSaudeMental', () => {
  let component: GestaoSaudeMental;
  let fixture: ComponentFixture<GestaoSaudeMental>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestaoSaudeMental]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestaoSaudeMental);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
