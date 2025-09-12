import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntendimentoEmpressarial } from './antendimento-empressarial';

describe('AntendimentoEmpressarial', () => {
  let component: AntendimentoEmpressarial;
  let fixture: ComponentFixture<AntendimentoEmpressarial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AntendimentoEmpressarial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntendimentoEmpressarial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
