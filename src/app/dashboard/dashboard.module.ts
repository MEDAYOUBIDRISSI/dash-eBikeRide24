import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core'

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SupportComponent } from './support/support.component';
import { MarqueComponent } from './features/marque/marque.component';
import { FeaturePageComponent } from './features/feature-page/feature-page.component';
import { AjouterMarqueComponent } from './features/marque/ajouter-marque/ajouter-marque.component';
import { ModifierMarqueComponent } from './features/marque/modifier-marque/modifier-marque.component';

import {FormsModule} from '@angular/forms';
import { CategorieComponent } from './features/categorie/categorie.component';
import { UniverComponent } from './features/univer/univer.component';
import { AjouterCategorieComponent } from './features/categorie/ajouter-categorie/ajouter-categorie.component';
import { ModifierCategorieComponent } from './features/categorie/modifier-categorie/modifier-categorie.component';
import { AjouterUniverComponent } from './features/univer/ajouter-univer/ajouter-univer.component';
import { ModifierUniverComponent } from './features/univer/modifier-univer/modifier-univer.component';
import { ProduitComponent } from './produit/produit.component';
import { BicycletteComponent } from './produit/bicyclette/bicyclette.component';
import { AccessoireCyclisteComponent } from './produit/accessoire-cycliste/accessoire-cycliste.component';
import { AccessoireVeloComponent } from './produit/accessoire-velo/accessoire-velo.component';
import { AjouterBicycletteComponent } from './produit/bicyclette/ajouter-bicyclette/ajouter-bicyclette.component';
import { ModifierBicycletteComponent } from './produit/bicyclette/modifier-bicyclette/modifier-bicyclette.component';
import { AjouterAccessoireCyclisteComponent } from './produit/accessoire-cycliste/ajouter-accessoire-cycliste/ajouter-accessoire-cycliste.component';
import { ModifierAccessoireCyclisteComponent } from './produit/accessoire-cycliste/modifier-accessoire-cycliste/modifier-accessoire-cycliste.component';
import { AjouterAccessoireVeloComponent } from './produit/accessoire-velo/ajouter-accessoire-velo/ajouter-accessoire-velo.component';
import { ModifierAccessoireVeloComponent } from './produit/accessoire-velo/modifier-accessoire-velo/modifier-accessoire-velo.component';


@NgModule({
  declarations: [SupportComponent, MarqueComponent, FeaturePageComponent, AjouterMarqueComponent, ModifierMarqueComponent, CategorieComponent, UniverComponent, AjouterCategorieComponent, ModifierCategorieComponent, AjouterUniverComponent, ModifierUniverComponent, ProduitComponent, BicycletteComponent, AccessoireCyclisteComponent, AccessoireVeloComponent, AjouterBicycletteComponent, ModifierBicycletteComponent, AjouterAccessoireCyclisteComponent, ModifierAccessoireCyclisteComponent, AjouterAccessoireVeloComponent, ModifierAccessoireVeloComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TranslateModule,
    FormsModule
  ]
})
export class DashboardModule { }
