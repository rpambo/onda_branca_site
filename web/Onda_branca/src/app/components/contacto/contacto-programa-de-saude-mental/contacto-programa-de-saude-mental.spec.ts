import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoProgramaDeSaudeMental } from './contacto-programa-de-saude-mental';

describe('ContactoProgramaDeSaudeMental', () => {
  let component: ContactoProgramaDeSaudeMental;
  let fixture: ComponentFixture<ContactoProgramaDeSaudeMental>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoProgramaDeSaudeMental]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoProgramaDeSaudeMental);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
