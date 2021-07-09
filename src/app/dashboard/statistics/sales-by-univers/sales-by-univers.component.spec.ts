import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByUniversComponent } from './sales-by-univers.component';

describe('SalesByUniversComponent', () => {
  let component: SalesByUniversComponent;
  let fixture: ComponentFixture<SalesByUniversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesByUniversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesByUniversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
