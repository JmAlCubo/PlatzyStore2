import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/models/product.model';
import { ProductsService } from './../../../core/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[];

  nombreColumnas = ['id', 'title', 'price', 'action'];

  constructor(
    private productsService: ProductsService
  ) {
  }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void{
    this.productsService.getAllProducts()
    .subscribe( product => {
      this.products = product;
    });
  }

  eliminarProducto(id: string): void{
    this.productsService.deleteProduct(id)
    .subscribe(rst => {
      if (rst) {
        alert('Se elimino el producto con la id ' + id);
        this.obtenerProductos();
      }
    });
  }
}
