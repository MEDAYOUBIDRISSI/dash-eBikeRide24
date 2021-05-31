import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterUniverComponent } from './ajouter-univer.component';

describe('AjouterUniverComponent', () => {
  let component: AjouterUniverComponent;
  let fixture: ComponentFixture<AjouterUniverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterUniverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterUniverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
