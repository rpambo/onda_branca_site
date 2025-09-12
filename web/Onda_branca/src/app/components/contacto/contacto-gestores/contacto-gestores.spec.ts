import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoGestores } from './contacto-gestores';

describe('ContactoGestores', () => {
  let component: ContactoGestores;
  let fixture: ComponentFixture<ContactoGestores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoGestores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoGestores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
