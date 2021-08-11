import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCouponComponent } from './ajouter-coupon.component';

describe('AjouterCouponComponent', () => {
  let component: AjouterCouponComponent;
  let fixture: ComponentFixture<AjouterCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterCouponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
