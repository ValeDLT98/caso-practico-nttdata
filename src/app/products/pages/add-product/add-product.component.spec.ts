import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductComponent } from './add-product.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProductComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AddProductComponent);
    formBuilder = TestBed.inject(FormBuilder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return null for undefined field', () => {
    expect(component.getFieldError('undefinedField')).toBeNull();
  });

  it('should return error message for required field', () => {
    const formGroup: FormGroup = formBuilder.group({
      testField: ['', Validators.required],
    });
    component.myForm = formGroup;

    expect(component.getFieldError('testField')).toBe(
      'Este campo es requerido'
    );
  });
});
