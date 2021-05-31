import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierBicycletteComponent } from './modifier-bicyclette.component';

describe('ModifierBicycletteComponent', () => {
  let component: ModifierBicycletteComponent;
  let fixture: ComponentFixture<ModifierBicycletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierBicycletteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierBicycletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
