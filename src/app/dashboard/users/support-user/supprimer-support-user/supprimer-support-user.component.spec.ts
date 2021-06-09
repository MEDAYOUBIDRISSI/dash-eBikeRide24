import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerSupportUserComponent } from './supprimer-support-user.component';

describe('SupprimerSupportUserComponent', () => {
  let component: SupprimerSupportUserComponent;
  let fixture: ComponentFixture<SupprimerSupportUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerSupportUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerSupportUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
