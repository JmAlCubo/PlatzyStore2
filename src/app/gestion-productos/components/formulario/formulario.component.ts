import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Input() updateProduct: Product;
  @Output() getProduct: EventEmitter<Product>;

  product: Product;

  formularioProducto = this.fb.group({
    id: [null, Validators.required],
    title: [null, Validators.required],
    price: [null, Validators.required],
    description: [null, Validators.required],
    image: [null, Validators.required],
  });

  constructor(
    private fb: FormBuilder
  ) {
    this.getProduct = new EventEmitter();
  }

  ngOnInit(): void {
    this.existeProducto();
  }

  existeProducto(): void{
    if (this.updateProduct){
      this.formularioProducto = this.fb.group({
        id: [this.updateProduct.id, Validators.required],
        title: [this.updateProduct.title, Validators.required],
        price: [this.updateProduct.price, Validators.required],
        description: [this.updateProduct.description, Validators.required],
        image: [this.updateProduct.image, Validators.required],
      });
    }
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.product = this.formularioProducto.getRawValue();
    this.getProduct.emit(this.product);
  }
}
