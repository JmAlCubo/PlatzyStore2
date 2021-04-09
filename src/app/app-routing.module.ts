import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { LayuotComponent } from './layout/layuot.component';

const routes: Routes = [
  {
    path: '',
    component: LayuotComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      },
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./gestion-productos/gestion-productos.module').then(m => m.GestionProductosModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-fonud.module').then(m => m.PageNotFonudModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
