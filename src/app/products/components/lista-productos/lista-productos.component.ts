import { Component, OnInit } from '@angular/core';

import { Product } from '../../../models/product.model';
import { ProductsService } from './../../../core/services/products/products.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productsService: ProductsService
  ) {
  }

  ngOnInit(): void{
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products;
    });
  }

  productClicked(id: number): void{
    console.log(`El producto tiene el ID : ${id}`);
  }

  deleteProduct(id: string): void{
    const p = this.products.findIndex(product => product.id === id);
    this.products.splice(p, 1);
  }
}
