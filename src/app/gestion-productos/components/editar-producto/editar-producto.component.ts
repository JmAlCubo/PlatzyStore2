import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  product: Product;

  constructor(
    private router: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.obtenerProducto(params.id);
    });
  }

  obtenerProducto(id: string): void {
    this.productsService.getProduct(id)
      .subscribe(product => {
        this.product = product;
        console.log( this.product );
      });
  }

  editarProducto(product: Product): void{
    this.productsService.uppdateProduct(product.id, product)
      .subscribe(p => {
        console.log(p);
      });
  }
}
