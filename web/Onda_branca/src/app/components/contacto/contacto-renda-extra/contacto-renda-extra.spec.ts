import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoRendaExtra } from './contacto-renda-extra';

describe('ContactoRendaExtra', () => {
  let component: ContactoRendaExtra;
  let fixture: ComponentFixture<ContactoRendaExtra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoRendaExtra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoRendaExtra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
