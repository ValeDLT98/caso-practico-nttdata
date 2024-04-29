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
});
