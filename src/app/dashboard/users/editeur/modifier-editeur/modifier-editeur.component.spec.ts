import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierEditeurComponent } from './modifier-editeur.component';

describe('ModifierEditeurComponent', () => {
  let component: ModifierEditeurComponent;
  let fixture: ComponentFixture<ModifierEditeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierEditeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierEditeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
