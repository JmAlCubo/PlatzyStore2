import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [
    {
        path: '',
        component: ListaProductosComponent
    },
    {
        path: ':id',
        component: ProductDetailComponent
    },
    {
        path: '/**',
        loadChildren: () => import('./../page-not-found/page-not-fonud.module').then(m => m.PageNotFonudModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class ProductRoutingModule {}
