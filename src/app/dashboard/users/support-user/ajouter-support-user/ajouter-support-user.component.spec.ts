import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSupportUserComponent } from './ajouter-support-user.component';

describe('AjouterSupportUserComponent', () => {
  let component: AjouterSupportUserComponent;
  let fixture: ComponentFixture<AjouterSupportUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterSupportUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterSupportUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
