import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParceiraEstrategicaComponent } from './parceira-estrategica-component';

describe('ParceiraEstrategicaComponent', () => {
  let component: ParceiraEstrategicaComponent;
  let fixture: ComponentFixture<ParceiraEstrategicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParceiraEstrategicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParceiraEstrategicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
