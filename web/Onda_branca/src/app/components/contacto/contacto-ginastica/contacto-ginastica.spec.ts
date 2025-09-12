import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoGinastica } from './contacto-ginastica';

describe('ContactoGinastica', () => {
  let component: ContactoGinastica;
  let fixture: ComponentFixture<ContactoGinastica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoGinastica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoGinastica);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
