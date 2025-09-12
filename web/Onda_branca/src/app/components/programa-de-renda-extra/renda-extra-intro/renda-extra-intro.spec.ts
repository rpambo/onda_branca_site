import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendaExtraIntro } from './renda-extra-intro';

describe('RendaExtraIntro', () => {
  let component: RendaExtraIntro;
  let fixture: ComponentFixture<RendaExtraIntro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RendaExtraIntro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendaExtraIntro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
