import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierRemiseComponent } from './modifier-remise.component';

describe('ModifierRemiseComponent', () => {
  let component: ModifierRemiseComponent;
  let fixture: ComponentFixture<ModifierRemiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierRemiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierRemiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
