import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Product } from '../interfaces/product.interface';
import { environment } from '../../../../enviroments.local';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService],
    });
    service = TestBed.inject(ProductsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should receive an array of products ', () => {
    const mockProducts: Product[] = [
      {
        id: '1',
        name: 'name',
        description: 'des',
        logo: 'src',
        date_release: new Date(),
        date_revision: new Date(),
      },
      {
        id: '2',
        name: 'name2',
        description: 'des2',
        logo: 'src2',
        date_release: new Date(),
        date_revision: new Date(),
      },
    ];
    service.getProducts().subscribe((response) => {
      expect(response).toEqual(mockProducts);
    });
    const req = httpTestingController.expectOne(
      `${environment.baseURL}/bp/products`
    );
    expect(req.request.method).toEqual('GET');

    req.flush(mockProducts);
  });

  it('should return an empty array if the request fails', () => {
    service.getProducts().subscribe((response) => {
      expect(response).toEqual([]);
    });

    const req = httpTestingController.expectOne(
      `${environment.baseURL}/bp/products`
    );
    expect(req.request.method).toEqual('GET');

    req.error(new ErrorEvent('Network error'));
  });
});
