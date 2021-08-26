import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupportComponent } from './support/support.component'
import { FeaturePageComponent } from './features/feature-page/feature-page.component'
import { ModifierMarqueComponent } from './features/marque/modifier-marque/modifier-marque.component'
import { MarqueComponent } from './features/marque/marque.component'
import { AjouterMarqueComponent } from './features/marque/ajouter-marque/ajouter-marque.component'
import { CategorieComponent } from './features/categorie/categorie.component'
import { ModifierCategorieComponent } from './features/categorie/modifier-categorie/modifier-categorie.component'
import { AjouterCategorieComponent } from './features/categorie/ajouter-categorie/ajouter-categorie.component'
import { UniverComponent } from './features/univer/univer.component'
import { AjouterUniverComponent } from './features/univer/ajouter-univer/ajouter-univer.component'
import { ModifierUniverComponent } from './features/univer/modifier-univer/modifier-univer.component'
import { ProduitComponent } from './produit/produit.component'
import { BicycletteComponent } from './produit/bicyclette/bicyclette.component'
import { AjouterBicycletteComponent } from './produit/bicyclette/ajouter-bicyclette/ajouter-bicyclette.component'
import { ModifierBicycletteComponent } from './produit/bicyclette/modifier-bicyclette/modifier-bicyclette.component'
import { AccessoireVeloComponent } from './produit/accessoire-velo/accessoire-velo.component'
import { AjouterAccessoireVeloComponent } from './produit/accessoire-velo/ajouter-accessoire-velo/ajouter-accessoire-velo.component'
import { ModifierAccessoireVeloComponent } from './produit/accessoire-velo/modifier-accessoire-velo/modifier-accessoire-velo.component'
import { AccessoireCyclisteComponent } from './produit/accessoire-cycliste/accessoire-cycliste.component'
import { AjouterAccessoireCyclisteComponent } from './produit/accessoire-cycliste/ajouter-accessoire-cycliste/ajouter-accessoire-cycliste.component'
import { ModifierAccessoireCyclisteComponent } from './produit/accessoire-cycliste/modifier-accessoire-cycliste/modifier-accessoire-cycliste.component'
import { UserPageComponent } from './users/user-page/user-page.component'
import { AdminComponent } from './users/admin/admin.component'
import { AjouterAdminComponent } from './users/admin/ajouter-admin/ajouter-admin.component'
import { EditeurComponent } from './users/editeur/editeur.component'
import { AjouterEditeurComponent } from './users/editeur/ajouter-editeur/ajouter-editeur.component'
import { LivreurComponent } from './users/livreur/livreur.component'
import { AjouterLivreurComponent } from './users/livreur/ajouter-livreur/ajouter-livreur.component'
import { SupportUserComponent } from './users/support-user/support-user.component'
import { AjouterSupportUserComponent } from './users/support-user/ajouter-support-user/ajouter-support-user.component'
import { ModifierAdminComponent } from './users/admin/modifier-admin/modifier-admin.component'
import { ModifierEditeurComponent } from './users/editeur/modifier-editeur/modifier-editeur.component'
import { ModifierLivreurComponent } from './users/livreur/modifier-livreur/modifier-livreur.component'
import { ModifierSupportUserComponent } from './users/support-user/modifier-support-user/modifier-support-user.component'
import { ClientComponent } from './users/client/client.component'
import { ClientDetailComponent } from './users/client/client-detail/client-detail.component'
import { InboxComponent } from './inbox/inbox.component'
import { ChatComponent } from './inbox/chat/chat.component'
import { NewChatComponent } from './inbox/new-chat/new-chat.component'
import { StatisticsComponent } from './statistics/statistics.component'
import { WebSocketChatComponent } from './inbox/web-socket-chat/web-socket-chat.component'
import { CouponComponent } from './features/coupon/coupon.component'
import { AjouterCouponComponent } from './features/coupon/ajouter-coupon/ajouter-coupon.component'
import { ModifierCouponComponent } from './features/coupon/modifier-coupon/modifier-coupon.component'
import { RemiseComponent } from './features/remise/remise.component'
import { AjouterRemiseComponent } from './features/remise/ajouter-remise/ajouter-remise.component'
import { ModifierRemiseComponent } from './features/remise/modifier-remise/modifier-remise.component'

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
    path:'feature/brand',
    component:MarqueComponent,
    children:[
      {
        path:'dash',
        component:MarqueComponent
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
    path:'feature/categorie',
    component:CategorieComponent,
    children:[
      {
        path:'dash',
        component:CategorieComponent
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
    path:'feature/remise',
    component:RemiseComponent,
    children:[
      {
        path:'dash',
        component:RemiseComponent
      }
    ] 
  },
  {
    path:'feature-update-Remise/:_id',
    component:ModifierRemiseComponent,
    children:[
      {
        path:'dash',
        component:ModifierRemiseComponent
      }
    ] 
  },
  {
    path:'feature-add-Remise',
    component:AjouterRemiseComponent,
    children:[
      {
        path:'dash',
        component:AjouterRemiseComponent
      }
    ] 
  },
  {
    path:'feature/univer',
    component:UniverComponent,
    children:[
      {
        path:'dash',
        component:UniverComponent
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
    path:'produits/bicyclette',
    component:BicycletteComponent,
    children:[
      {
        path:'dash',
        component:BicycletteComponent
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
    path:'produits/accessoirevelo',
    component:AccessoireVeloComponent,
    children:[
      {
        path:'dash',
        component:AccessoireVeloComponent
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
    path:'produits/accessoirecycliste',
    component:AccessoireCyclisteComponent,
    children:[
      {
        path:'dash',
        component:AccessoireCyclisteComponent
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
  },
  {
    path:'users/admin',
    component:AdminComponent,
    children:[
      {
        path:'dash',
        component:AdminComponent
      }
    ] 
  },
  {
    path:'users/ajouter-admin',
    component:AjouterAdminComponent,
    children:[
      {
        path:'dash',
        component:AjouterAdminComponent
      }
    ] 
  },
  {
    path:'users/editeur',
    component:EditeurComponent,
    children:[
      {
        path:'dash',
        component:EditeurComponent
      }
    ] 
  },
  {
    path:'users/ajouter-editeur',
    component:AjouterEditeurComponent,
    children:[
      {
        path:'dash',
        component:AjouterEditeurComponent
      }
    ] 
  },
  {
    path:'users/livreur',
    component:LivreurComponent,
    children:[
      {
        path:'dash',
        component:LivreurComponent
      }
    ] 
  },
  {
    path:'users/ajouter-livreur',
    component:AjouterLivreurComponent,
    children:[
      {
        path:'dash',
        component:AjouterLivreurComponent
      }
    ] 
  },
  {
    path:'users/support-user',
    component:SupportUserComponent,
    children:[
      {
        path:'dash',
        component:SupportUserComponent
      }
    ] 
  },
  {
    path:'users/ajouter-support-user',
    component:AjouterSupportUserComponent,
    children:[
      {
        path:'dash',
        component:AjouterSupportUserComponent
      }
    ] 
  },
  {
    path:'users/modifier-admin/:_id',
    component:ModifierAdminComponent,
    children:[
      {
        path:'dash',
        component:ModifierAdminComponent
      }
    ] 
  },
  {
    path:'users/modifier-editeur/:_id',
    component:ModifierEditeurComponent,
    children:[
      {
        path:'dash',
        component:ModifierEditeurComponent
      }
    ] 
  },
  {
    path:'users/modifier-livreur/:_id',
    component:ModifierLivreurComponent,
    children:[
      {
        path:'dash',
        component:ModifierLivreurComponent
      }
    ] 
  },
  {
    path:'users/modifier-support-user/:_id',
    component:ModifierSupportUserComponent,
    children:[
      {
        path:'dash',
        component:ModifierSupportUserComponent
      }
    ] 
  },
  {
    path:'users/client',
    component:ClientComponent,
    children:[
      {
        path:'dash',
        component:ClientComponent
      }
    ] 
  },
  {
    path:'users/clientDetail/:_id',
    component:ClientDetailComponent,
    children:[
      {
        path:'dash',
        component:ClientDetailComponent
      }
    ] 
  },
  {
    path:'inbox',
    component:InboxComponent,
    children:[
      {
        path:'dash',
        component:InboxComponent
      }
    ] 
  },
  {
    path:'chat/:_id',
    component:ChatComponent,
    children:[
      {
        path:'dash',
        component:ChatComponent
      }
    ] 
  },
  {
    path:'newChat',
    component:NewChatComponent,
    children:[
      {
        path:'dash',
        component:NewChatComponent
      }
    ] 
  },
  {
    path:'statistic',
    component:StatisticsComponent,
    children:[
      {
        path:'dash',
        component:StatisticsComponent
      }
    ] 
  },
  {
    path:'websocket',
    component:WebSocketChatComponent,
    children:[
      {
        path:'dash',
        component:WebSocketChatComponent
      }
    ] 
  },
  {
    path:'feature/coupon',
    component:CouponComponent,
    children:[
      {
        path:'dash',
        component:CouponComponent
      }
    ] 
  },
  {
    path:'coupon/ajouter-coupon',
    component:AjouterCouponComponent,
    children:[
      {
        path:'dash',
        component:AjouterCouponComponent
      }
    ] 
  },
  {
    path:'coupon/modifier-coupon/:_id',
    component:ModifierCouponComponent,
    children:[
      {
        path:'dash',
        component:ModifierCouponComponent
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
