import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierSupportUserComponent } from './modifier-support-user.component';

describe('ModifierSupportUserComponent', () => {
  let component: ModifierSupportUserComponent;
  let fixture: ComponentFixture<ModifierSupportUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierSupportUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierSupportUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
