import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterBicycletteComponent } from './ajouter-bicyclette.component';

describe('AjouterBicycletteComponent', () => {
  let component: AjouterBicycletteComponent;
  let fixture: ComponentFixture<AjouterBicycletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterBicycletteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterBicycletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
