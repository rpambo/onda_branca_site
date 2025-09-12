import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoPalestra } from './contacto-palestra';

describe('ContactoPalestra', () => {
  let component: ContactoPalestra;
  let fixture: ComponentFixture<ContactoPalestra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoPalestra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoPalestra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
