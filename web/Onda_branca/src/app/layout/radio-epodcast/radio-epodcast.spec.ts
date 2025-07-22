import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioEpodcast } from './radio-epodcast';

describe('RadioEpodcast', () => {
  let component: RadioEpodcast;
  let fixture: ComponentFixture<RadioEpodcast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioEpodcast]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioEpodcast);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
