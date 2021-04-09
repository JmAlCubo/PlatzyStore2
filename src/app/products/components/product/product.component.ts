import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Product } from '../../../models/product.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnDestroy {

  @Input() product: Product;
  @Output() clicked: EventEmitter<string>;
  @Output() deleteProductClick: EventEmitter<string>;

  constructor(
    private productsService: ProductsService,
    private router: ActivatedRoute
  ) {
    this.clicked = new EventEmitter();
    this.deleteProductClick = new EventEmitter();
  }

  addCart(): void {
    console.log(`Se Agregó al carrito`);
    this.clicked.emit(this.product.id);
  }

  deleteProduct(): void {
    this.productsService.deleteProduct(this.product.id)
    .subscribe(rst => {
      if (rst) {
        this.deleteProductClick.emit(this.product.id);
      } else {
        alert('No se pudo eliminar el producto');
      }
    });
  }

  ngOnDestroy(): void {
    console.log(`se ha eliminado el producto: ${this.product.title}`);
  }
}
