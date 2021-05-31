import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterAccessoireVeloComponent } from './ajouter-accessoire-velo.component';

describe('AjouterAccessoireVeloComponent', () => {
  let component: AjouterAccessoireVeloComponent;
  let fixture: ComponentFixture<AjouterAccessoireVeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterAccessoireVeloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterAccessoireVeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
