import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupportComponent } from './support/support.component'
import { FeaturePageComponent } from './features/feature-page/feature-page.component'
import { ModifierMarqueComponent } from './features/marque/modifier-marque/modifier-marque.component'
import { AjouterMarqueComponent } from './features/marque/ajouter-marque/ajouter-marque.component'
import { ModifierCategorieComponent } from './features/categorie/modifier-categorie/modifier-categorie.component'
import { AjouterCategorieComponent } from './features/categorie/ajouter-categorie/ajouter-categorie.component'
import { AjouterUniverComponent } from './features/univer/ajouter-univer/ajouter-univer.component'
import { ModifierUniverComponent } from './features/univer/modifier-univer/modifier-univer.component'
import { ProduitComponent } from './produit/produit.component'
import { AjouterBicycletteComponent } from './produit/bicyclette/ajouter-bicyclette/ajouter-bicyclette.component'
import { ModifierBicycletteComponent } from './produit/bicyclette/modifier-bicyclette/modifier-bicyclette.component'
import { AjouterAccessoireVeloComponent } from './produit/accessoire-velo/ajouter-accessoire-velo/ajouter-accessoire-velo.component'
import { ModifierAccessoireVeloComponent } from './produit/accessoire-velo/modifier-accessoire-velo/modifier-accessoire-velo.component'
import { AjouterAccessoireCyclisteComponent } from './produit/accessoire-cycliste/ajouter-accessoire-cycliste/ajouter-accessoire-cycliste.component'
import { ModifierAccessoireCyclisteComponent } from './produit/accessoire-cycliste/modifier-accessoire-cycliste/modifier-accessoire-cycliste.component'
import { UserPageComponent } from './users/user-page/user-page.component'

const routes: Routes = [
  {
    path:'support',
    component:SupportComponent,
    children:[
      {
        path:'dash',
        component:SupportComponent
      }
    ] 
  },
  {
    path:'feature',
    component:FeaturePageComponent,
    children:[
      {
        path:'dash',
        component:FeaturePageComponent
      }
    ] 
  },
  {
    path:'feature-update-Marque/:_id',
    component:ModifierMarqueComponent,
    children:[
      {
        path:'dash',
        component:ModifierMarqueComponent
      }
    ] 
  },
  {
    path:'feature-add-Marque',
    component:AjouterMarqueComponent,
    children:[
      {
        path:'dash',
        component:AjouterMarqueComponent
      }
    ] 
  },
  {
    path:'feature-update-Categorie/:_id',
    component:ModifierCategorieComponent,
    children:[
      {
        path:'dash',
        component:ModifierCategorieComponent
      }
    ] 
  },
  {
    path:'feature-add-Categorie',
    component:AjouterCategorieComponent,
    children:[
      {
        path:'dash',
        component:AjouterCategorieComponent
      }
    ] 
  },
  {
    path:'feature-update-Univer/:_id',
    component:ModifierUniverComponent,
    children:[
      {
        path:'dash',
        component:ModifierUniverComponent
      }
    ] 
  },
  {
    path:'feature-add-Univer',
    component:AjouterUniverComponent,
    children:[
      {
        path:'dash',
        component:AjouterUniverComponent
      }
    ] 
  }
  ,
  {
    path:'produits',
    component:ProduitComponent,
    children:[
      {
        path:'dash',
        component:ProduitComponent
      }
    ] 
  },
  {
    path:'produits/ajouter-bicyclette',
    component:AjouterBicycletteComponent,
    children:[
      {
        path:'dash',
        component:AjouterBicycletteComponent
      }
    ] 
  },
  {
    path:'produits/modifier-bicyclette/:_id',
    component:ModifierBicycletteComponent,
    children:[
      {
        path:'dash',
        component:ModifierBicycletteComponent
      }
    ] 
  },
  {
    path:'produits/ajouter-accessoirevelo',
    component:AjouterAccessoireVeloComponent,
    children:[
      {
        path:'dash',
        component:AjouterAccessoireVeloComponent
      }
    ] 
  },
  {
    path:'produits/modifier-accessoirevelo/:_id',
    component:ModifierAccessoireVeloComponent,
    children:[
      {
        path:'dash',
        component:ModifierAccessoireVeloComponent
      }
    ] 
  },
  {
    path:'produits/ajouter-accessoirecycliste',
    component:AjouterAccessoireCyclisteComponent,
    children:[
      {
        path:'dash',
        component:AjouterAccessoireCyclisteComponent
      }
    ] 
  },
  {
    path:'produits/modifier-accessoirecycliste/:_id',
    component:ModifierAccessoireCyclisteComponent,
    children:[
      {
        path:'dash',
        component:ModifierAccessoireCyclisteComponent
      }
    ] 
  },
  {
    path:'users',
    component:UserPageComponent,
    children:[
      {
        path:'dash',
        component:UserPageComponent
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
