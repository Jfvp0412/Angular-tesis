import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFundacionComponent } from './crear-fundacion.component';

describe('CrearFundacionComponent', () => {
  let component: CrearFundacionComponent;
  let fixture: ComponentFixture<CrearFundacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearFundacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFundacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
