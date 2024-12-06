import { Routes } from '@angular/router';
import { ProductCatalogComponent } from './pages/product-catalog/product-catalog.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "products", component: ProductCatalogComponent },
    { path: "", redirectTo: "products", pathMatch: "full" },
    { path: "form", component: ProductFormComponent, canActivate: [authGuard] },
    { path: "**", component: NotFoundComponent },
];
