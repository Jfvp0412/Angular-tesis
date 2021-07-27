import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAdoptanteComponent } from './crear-adoptante.component';

describe('CrearAdoptanteComponent', () => {
  let component: CrearAdoptanteComponent;
  let fixture: ComponentFixture<CrearAdoptanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAdoptanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAdoptanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
