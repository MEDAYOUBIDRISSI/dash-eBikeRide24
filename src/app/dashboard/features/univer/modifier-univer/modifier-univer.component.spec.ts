import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierUniverComponent } from './modifier-univer.component';

describe('ModifierUniverComponent', () => {
  let component: ModifierUniverComponent;
  let fixture: ComponentFixture<ModifierUniverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierUniverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierUniverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
