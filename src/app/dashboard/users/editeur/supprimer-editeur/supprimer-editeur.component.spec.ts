import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerEditeurComponent } from './supprimer-editeur.component';

describe('SupprimerEditeurComponent', () => {
  let component: SupprimerEditeurComponent;
  let fixture: ComponentFixture<SupprimerEditeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerEditeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerEditeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
