import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductRoutingModule } from './products-routing.module';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

import { CoreModule } from './../core/core.module';

import { MaterialModule } from './../material/material.module';

@NgModule({
    declarations: [
        ListaProductosComponent,
        ProductComponent,
        ProductDetailComponent
    ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        FormsModule,
        CoreModule,
        MaterialModule
    ]
})

export class ProductsModule {}
