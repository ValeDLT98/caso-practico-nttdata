import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { of } from 'rxjs';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  constructor(
    private fb: FormBuilder,
    private prodcutsService: ProductsService
  ) {}

  public myForm: FormGroup = this.fb.group({
    id: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(10)],
    ],
    name: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(100)],
    ],
    description: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(200),
      ],
    ],
    logo: ['', [Validators.required]],
    date_release: ['', [Validators.required, this.fechaMayorQueHoy]],
    date_revision: ['', [Validators.required]],
  });

  fechaMayorQueHoy(control: FormControl): { [key: string]: boolean } | null {
    const fechaSeleccionada = new Date(control.value);
    const hoy = new Date();
    if (fechaSeleccionada > hoy) {
      return { fechaMayorQueHoy: true };
    }
    return null;
  }

  isValidField(field: string) {
    if (field == 'date_release') {
      this.myForm
        .get('date_release')
        ?.valueChanges.subscribe((value: string) => {
          if (value) {
            const fechaSeleccionada = new Date(value);
            fechaSeleccionada.setFullYear(fechaSeleccionada.getFullYear() + 1);
            this.myForm
              .get('date_revision')
              ?.setValue(fechaSeleccionada.toISOString().slice(0, 10));
          }
        });
    }
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  getFieldError(field: string) {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracters.`;

        case 'maxlength':
          return `Máximo ${errors['maxlength'].requiredLength} caracters.`;

        case 'fechaMayorQueHoy':
          return 'La fecha no puede ser mayor a la de hoy';
      }
    }

    return null;
  }

  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    if (this.myForm.valid) {
      const formData = this.myForm.value;

      this.prodcutsService.createProduct(formData).subscribe(
        (response) => {
          console.log('Producto creado exitosamente:', response);
        },
        (error) => {
          console.error('Error al crear el producto:', error);
        }
      );
    }

    this.resetForm();
  }

  validateForm() {
    if (this.myForm.invalid) {
      return true;
    }

    return false;
  }

  resetForm() {
    this.myForm.reset({
      id: '',
      name: '',
      description: '',
      logo: '',
    });
  }
}
