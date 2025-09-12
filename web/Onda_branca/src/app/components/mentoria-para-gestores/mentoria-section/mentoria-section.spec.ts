import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentoriaSection } from './mentoria-section';

describe('MentoriaSection', () => {
  let component: MentoriaSection;
  let fixture: ComponentFixture<MentoriaSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentoriaSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentoriaSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
