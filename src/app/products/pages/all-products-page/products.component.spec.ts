import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ProductsComponent } from './products.component';
import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';
import { TableFooterComponent } from '../../components/table-footer/table-footer.component';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  let productsService: ProductsService;

  let httpTestingController: HttpTestingController;
  const MOCK_RESULT: Product[] = [
    {
      id: '1',
      name: 'nameEj',
      description: 'descriptionEj',
      logo: 'src',
      date_release: new Date(),
      date_revision: new Date(),
    },
    {
      id: '1',
      name: 'nameEj2',
      description: 'descriptionEj2',
      logo: 'src2',
      date_release: new Date(),
      date_revision: new Date(),
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsComponent, TableFooterComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [ProductsService],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    productsService = TestBed.inject(ProductsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be instantiable', () => {
    expect(productsService).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize products on ngOnInit', () => {
    jest.spyOn(productsService, 'getProducts').mockReturnValue(of(MOCK_RESULT));

    component.ngOnInit();

    expect(component.products).toEqual(MOCK_RESULT);
  });

  it('should show filtered products', () => {
    const searchTerm = 'nameEj2';

    component.products = MOCK_RESULT;

    component.searchProduct(searchTerm);

    expect(component.filteredProducts.length).toBe(1);
  });

  it('should show products by quantity', () => {
    let quantity = 1;

    component.products = MOCK_RESULT;

    component.getSelectNumber(quantity);

    expect(component.filteredProducts.length).toBe(1);

    quantity = 5;

    component.getSelectNumber(quantity);

    expect(component.filteredProducts.length).toBe(MOCK_RESULT.length);
  });
});
