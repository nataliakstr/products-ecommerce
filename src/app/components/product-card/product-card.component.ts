import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  // @Input({required: true}) product?: Product -> Utilizado quando queremos que a passagem do objeto como propriedade seja obrigatória para o componente pai
  @Input() product?: Product = {
    id: 0,
    title: "Anne Hathaway",
    category: "engagement ring",
    imageLink: "https://www.brereton.ie/images/0-61ct-g-vs1-round-six-claw-natural-diamond-solitaire-engagement-ring-channel-set-diamond-shoulders-p788-1492_thumb.jpg",
    price: 3000,
    description: "This beautiful 18ct white gold natural diamond solitaire ring features one central 0.46ct round brilliant cut diamond. This diamond is set into a classic six-claw setting and is further enhanced by a round brilliant diamond set 18ct white gold slender band. ",
    availableInStock: 10
  };
  // @Output() warnProductCatalog: EventEmitter<Product> = new EventEmitter();

  constructor(private cartService: CartService) {
    // this.cartService = new CartService(); -> NÃO VOU FAZER ISSO
  }

  // warnParentAboutItemAddition(product: Product) {
  //   console.log(`Avisa ao meu pai que eu cliquei no produto ${product.title}`);
  //   this.warnProductCatalog.emit(product);
  // }

  addProductToCart(product: Product) {
    console.log(`Adicionei o produto ${product.title} ao carrinho!`);
    // chamar o método do service responsável por adicionar um produto ao carrinho
    this.cartService.addItemToCart(product);
  }
}
