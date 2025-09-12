import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendaExtraMetodologia } from './renda-extra-metodologia';

describe('RendaExtraMetodologia', () => {
  let component: RendaExtraMetodologia;
  let fixture: ComponentFixture<RendaExtraMetodologia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RendaExtraMetodologia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendaExtraMetodologia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
