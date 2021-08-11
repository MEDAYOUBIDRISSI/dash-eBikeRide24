import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierCouponComponent } from './modifier-coupon.component';

describe('ModifierCouponComponent', () => {
  let component: ModifierCouponComponent;
  let fixture: ComponentFixture<ModifierCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierCouponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
