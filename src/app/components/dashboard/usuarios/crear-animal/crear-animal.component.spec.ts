import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAnimalComponent } from './crear-animal.component';

describe('CrearAnimalComponent', () => {
  let component: CrearAnimalComponent;
  let fixture: ComponentFixture<CrearAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAnimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
