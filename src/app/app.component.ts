import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

import { HeaderComponent } from './components/header/header.component';
import { ProductCatalogComponent } from "./pages/product-catalog/product-catalog.component";
import { CartComponent } from "./components/cart/cart.component";
import { ProductFormComponent } from "./pages/product-form/product-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ProductCatalogComponent, MatSidenavModule, CartComponent, ProductFormComponent],
  templateUrl: './app.component.html',
  // template: '<h1>Minha página bonita</h1>',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'products-ecommerce';
}
