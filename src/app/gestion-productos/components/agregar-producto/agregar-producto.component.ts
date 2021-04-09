import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './../../../models/product.model';

import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  product: Product = {
    id: '0',
    title: '',
    price: 0,
    description: '',
    image: ''
  };

  constructor(
    private router: Router,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
  }

  agregarProducto(product: Product): void {
    this.productsService.createProduct(product)
      .subscribe(p => {
        if (p) {
          this.router.navigate(['./']);
        }else{
          alert('Problemas, vuelva a intentarlo');
        }
      });
  }

}
