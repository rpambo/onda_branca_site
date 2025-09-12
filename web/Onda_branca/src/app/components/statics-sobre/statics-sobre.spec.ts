import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticsSobre } from './statics-sobre';

describe('StaticsSobre', () => {
  let component: StaticsSobre;
  let fixture: ComponentFixture<StaticsSobre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticsSobre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticsSobre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
