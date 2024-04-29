import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  public products: Product[] = [];
  public filteredProducts: Product[] = [];
  public columns = [];

  constructor(private productsService: ProductsService) {}

  async ngOnInit(): Promise<void> {
    this.productsService.getProducts().subscribe((response) => {
      this.products = response;
      this.filteredProducts = response;
    });
  }

  searchProduct(value: string) {
    this.filteredProducts = this.products.filter(
      (product) =>
        product.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
        product.description
          .toLocaleLowerCase()
          .includes(value.toLocaleLowerCase()) ||
        product.date_release.toString().includes(value) ||
        product.date_revision.toString().includes(value)
    );
  }
}
