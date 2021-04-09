import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../material/material.module';
import { GestionProductosRoutingModule } from './gestion-productos-routing.module';

import { NavComponent } from './components/nav/nav.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';

@NgModule({
  declarations: [
    AgregarProductoComponent,
    FormularioComponent,
    EditarProductoComponent,
    NavComponent,
    InicioComponent,
    ProductsListComponent,
    DetalleProductoComponent
  ],
  imports: [
    CommonModule,
    GestionProductosRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class GestionProductosModule { }
