import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerAdminComponent } from './supprimer-admin.component';

describe('SupprimerAdminComponent', () => {
  let component: SupprimerAdminComponent;
  let fixture: ComponentFixture<SupprimerAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
