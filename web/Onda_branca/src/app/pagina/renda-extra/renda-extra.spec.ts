import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendaExtra } from './renda-extra';

describe('RendaExtra', () => {
  let component: RendaExtra;
  let fixture: ComponentFixture<RendaExtra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RendaExtra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendaExtra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
