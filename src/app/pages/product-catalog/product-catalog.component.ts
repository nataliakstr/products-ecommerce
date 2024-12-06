import { Component, EventEmitter, inject, Output } from '@angular/core';

import { Product } from '../../models/product';
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-catalog',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-catalog.component.html',
  styleUrl: './product-catalog.component.scss'
})
export class ProductCatalogComponent {
  private productService: ProductService;
  // @Output() warnApp: EventEmitter<Product> = new EventEmitter();
  productsArray: Product[] = [];

  constructor() {
    this.productService = inject(ProductService);

    this.productService.getAllProducts().subscribe((productsArray: Product[]) => {
      this.productsArray = productsArray;
    });
  }

  // warnParentAboutItemAddition(product: Product) {
  //   console.log(`Qual foi, filhão! Relaxa q vou avisar ao meu pai também que você clicou no ${product.title}.`);
  //   this.warnApp.emit(product);
  // }
}
