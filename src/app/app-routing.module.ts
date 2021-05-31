import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component'
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component'

const routes: Routes = [
  {
    path:'',
    component:AuthLayoutComponent,
    children:[
      {
        path:'',
        redirectTo:'/auth',
        pathMatch:'full'
      },
      {
        path:'auth',
        loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path:'',
    component:DashboardLayoutComponent,
    children:[
      {
        path:'',
        redirectTo:'/dash',
        pathMatch:'full'
      },
      {
        path:'dash',
        loadChildren:() => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
