import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerLivreurComponent } from './supprimer-livreur.component';

describe('SupprimerLivreurComponent', () => {
  let component: SupprimerLivreurComponent;
  let fixture: ComponentFixture<SupprimerLivreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerLivreurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerLivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
