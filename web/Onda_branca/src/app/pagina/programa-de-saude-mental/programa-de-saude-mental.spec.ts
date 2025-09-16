import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaDeSaudeMental } from './programa-de-saude-mental';

describe('ProgramaDeSaudeMental', () => {
  let component: ProgramaDeSaudeMental;
  let fixture: ComponentFixture<ProgramaDeSaudeMental>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramaDeSaudeMental]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramaDeSaudeMental);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
