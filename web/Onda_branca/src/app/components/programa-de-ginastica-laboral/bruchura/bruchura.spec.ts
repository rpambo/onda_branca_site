import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bruchura } from './bruchura';

describe('Bruchura', () => {
  let component: Bruchura;
  let fixture: ComponentFixture<Bruchura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bruchura]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bruchura);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
