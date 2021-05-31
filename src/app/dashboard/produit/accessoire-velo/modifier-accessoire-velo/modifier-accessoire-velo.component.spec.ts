import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierAccessoireVeloComponent } from './modifier-accessoire-velo.component';

describe('ModifierAccessoireVeloComponent', () => {
  let component: ModifierAccessoireVeloComponent;
  let fixture: ComponentFixture<ModifierAccessoireVeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierAccessoireVeloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierAccessoireVeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
