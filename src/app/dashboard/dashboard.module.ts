import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core'

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SupportComponent } from './support/support.component';
import { MarqueComponent } from './features/marque/marque.component';
import { FeaturePageComponent } from './features/feature-page/feature-page.component';
import { AjouterMarqueComponent } from './features/marque/ajouter-marque/ajouter-marque.component';
import { ModifierMarqueComponent } from './features/marque/modifier-marque/modifier-marque.component';
import {MatPaginatorModule} from '@angular/material/paginator';

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
import { AdminComponent } from './users/admin/admin.component';
import { EditeurComponent } from './users/editeur/editeur.component';
import { LivreurComponent } from './users/livreur/livreur.component';
import { UserPageComponent } from './users/user-page/user-page.component';
import { ClientComponent } from './users/client/client.component';
import { SupportUserComponent } from './users/support-user/support-user.component';
import { SupprimerAdminComponent } from './users/admin/supprimer-admin/supprimer-admin.component';
import { AjouterAdminComponent } from './users/admin/ajouter-admin/ajouter-admin.component';
import { AjouterEditeurComponent } from './users/editeur/ajouter-editeur/ajouter-editeur.component';
import { AjouterLivreurComponent } from './users/livreur/ajouter-livreur/ajouter-livreur.component';
import { AjouterSupportUserComponent } from './users/support-user/ajouter-support-user/ajouter-support-user.component';
import { ModifierAdminComponent } from './users/admin/modifier-admin/modifier-admin.component';
import { ModifierEditeurComponent } from './users/editeur/modifier-editeur/modifier-editeur.component';
import { ModifierLivreurComponent } from './users/livreur/modifier-livreur/modifier-livreur.component';
import { ModifierSupportUserComponent } from './users/support-user/modifier-support-user/modifier-support-user.component';
import { SupprimerEditeurComponent } from './users/editeur/supprimer-editeur/supprimer-editeur.component';
import { SupprimerSupportUserComponent } from './users/support-user/supprimer-support-user/supprimer-support-user.component';
import { SupprimerLivreurComponent } from './users/livreur/supprimer-livreur/supprimer-livreur.component';
import { SupprimerProduitComponent } from './produit/supprimer-produit/supprimer-produit.component';
import { ClientDetailComponent } from './users/client/client-detail/client-detail.component';
import { ClientStatusComponent } from './users/client/client-status/client-status.component';
import { InboxComponent } from './inbox/inbox.component';
import { ChatComponent } from './inbox/chat/chat.component';
import { NewChatComponent } from './inbox/new-chat/new-chat.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { StatisticsComponent } from './statistics/statistics.component';
import { TotalsComponent } from './statistics/totals/totals.component';
import { SellingProductsComponent } from './statistics/selling-products/selling-products.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TopsellersComponent } from './statistics/topsellers/topsellers.component';
import { TopSellingProductComponent } from './statistics/top-selling-product/top-selling-product.component';
import { ProductByTypeComponent } from './statistics/product-by-type/product-by-type.component';
import { SalesByUniversComponent } from './statistics/sales-by-univers/sales-by-univers.component';
import { WebSocketChatComponent } from './inbox/web-socket-chat/web-socket-chat.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CouponComponent } from './features/coupon/coupon.component';
import { AjouterCouponComponent } from './features/coupon/ajouter-coupon/ajouter-coupon.component';
import { ModifierCouponComponent } from './features/coupon/modifier-coupon/modifier-coupon.component';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';


@NgModule({
  declarations: [SupportComponent, MarqueComponent, FeaturePageComponent, AjouterMarqueComponent, ModifierMarqueComponent, CategorieComponent, UniverComponent, AjouterCategorieComponent, ModifierCategorieComponent, AjouterUniverComponent, ModifierUniverComponent, ProduitComponent, BicycletteComponent, AccessoireCyclisteComponent, AccessoireVeloComponent, AjouterBicycletteComponent, ModifierBicycletteComponent, AjouterAccessoireCyclisteComponent, ModifierAccessoireCyclisteComponent, AjouterAccessoireVeloComponent, ModifierAccessoireVeloComponent, AdminComponent, EditeurComponent, LivreurComponent, UserPageComponent, ClientComponent, SupportUserComponent, SupprimerAdminComponent, AjouterAdminComponent, AjouterEditeurComponent, AjouterLivreurComponent, AjouterSupportUserComponent, ModifierAdminComponent, ModifierEditeurComponent, ModifierLivreurComponent, ModifierSupportUserComponent, SupprimerEditeurComponent, SupprimerSupportUserComponent, SupprimerLivreurComponent, SupprimerProduitComponent, ClientDetailComponent, ClientStatusComponent, InboxComponent, ChatComponent, NewChatComponent, StatisticsComponent, TotalsComponent, SellingProductsComponent, TopsellersComponent, TopSellingProductComponent, ProductByTypeComponent, SalesByUniversComponent, WebSocketChatComponent, CouponComponent, AjouterCouponComponent, ModifierCouponComponent],
  imports: [ 
    CommonModule,
    DashboardRoutingModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    NgxChartsModule,
    NgxDropzoneModule,
    NbChatModule,
    NbDatepickerModule,
    NbDialogModule,
    NbMenuModule,
    NbSidebarModule,
    NbToastrModule,
    NbWindowModule,
  ]
})
export class DashboardModule { }

