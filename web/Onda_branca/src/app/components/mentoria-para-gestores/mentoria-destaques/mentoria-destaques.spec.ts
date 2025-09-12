import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentoriaDestaques } from './mentoria-destaques';

describe('MentoriaDestaques', () => {
  let component: MentoriaDestaques;
  let fixture: ComponentFixture<MentoriaDestaques>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentoriaDestaques]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentoriaDestaques);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
