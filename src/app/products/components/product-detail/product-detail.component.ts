import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Product } from '../../../models/product.model';
import { ProductsService } from './../../../core/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private router: ActivatedRoute,
    private productsService: ProductsService,
  ) {}

  ngOnInit(): void{
    this.router.params.subscribe((params: Params) => {
      this.obtenerProducto(params.id);
    });
  }

  obtenerProducto(id: string): void{
      this.productsService.getProduct(id)
      .subscribe( product => {
        this.product = product;
      });
  }
}
