import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterRemiseComponent } from './ajouter-remise.component';

describe('AjouterRemiseComponent', () => {
  let component: AjouterRemiseComponent;
  let fixture: ComponentFixture<AjouterRemiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterRemiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterRemiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
