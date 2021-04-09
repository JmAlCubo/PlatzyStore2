import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavComponent } from './components/nav/nav.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: '',
        component: InicioComponent
      },
      {
        path: 'productos',
        component: ProductsListComponent
      },
      {
        path: 'productos/nuevo',
        component: AgregarProductoComponent
      },
      {
        path: 'productos/detalle',
        component: DetalleProductoComponent
      },
      {
        path: 'productos/editar/:id',
        component: EditarProductoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionProductosRoutingModule { }
