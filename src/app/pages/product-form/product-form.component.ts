import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {
  private productService: ProductService;
  private router: Router;
  private snackBar: MatSnackBar;
  productForm: FormGroup;

  constructor() {
    this.productService = inject(ProductService);
    this.router = inject(Router);
    this.snackBar = inject(MatSnackBar);

    this.productForm = new FormGroup({
      title: new FormControl('', Validators.required),
      platform: new FormControl('', Validators.required),
      imageLink: new FormControl('', [Validators.required, ]),
      price: new FormControl(0, [Validators.required, Validators.min(0)]),
      description: new FormControl('', [Validators.required, ]),
      availableInStock: new FormControl(0, [Validators.required, ]),
    });
  }

  submitForm(){
    if (this.productForm.invalid) {
      this.snackBar.open("Formulário possui campos inválidos!", "Fechar");
      return;
    }

    console.log("Formulário foi submetido!");
    console.log(this.productForm.value);
    
    // this.productService.createProduct(this.productForm.value).pipe(
    //   catchError((err) => {
    //     this.snackBar.open("Erro interno do servidor. Contate o suporte para mais informações!", "Fechar");
    //     return throwError(() => err);
    //   })
    // ).subscribe(() => {
    //   this.snackBar.open("Product adicionado com sucesso!", "Fechar");
    //   this.router.navigate(['products']);
    // });

    this.productService.createProduct(this.productForm.value).subscribe({
      next: () => {
        this.snackBar.open("Product adicionado com sucesso!", "Fechar");
        this.router.navigate(['products']);
      },
      error: () => {
        this.snackBar.open("Erro interno do servidor. Contate o suporte para mais informações!", "Fechar");
      }
    });
  }
}
