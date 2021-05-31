import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterAccessoireCyclisteComponent } from './ajouter-accessoire-cycliste.component';

describe('AjouterAccessoireCyclisteComponent', () => {
  let component: AjouterAccessoireCyclisteComponent;
  let fixture: ComponentFixture<AjouterAccessoireCyclisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterAccessoireCyclisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterAccessoireCyclisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
