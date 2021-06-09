import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEditeurComponent } from './ajouter-editeur.component';

describe('AjouterEditeurComponent', () => {
  let component: AjouterEditeurComponent;
  let fixture: ComponentFixture<AjouterEditeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterEditeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterEditeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
