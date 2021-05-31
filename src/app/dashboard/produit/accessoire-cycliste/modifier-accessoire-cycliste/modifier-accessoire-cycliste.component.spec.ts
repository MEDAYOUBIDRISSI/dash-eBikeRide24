import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierAccessoireCyclisteComponent } from './modifier-accessoire-cycliste.component';

describe('ModifierAccessoireCyclisteComponent', () => {
  let component: ModifierAccessoireCyclisteComponent;
  let fixture: ComponentFixture<ModifierAccessoireCyclisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierAccessoireCyclisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierAccessoireCyclisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
