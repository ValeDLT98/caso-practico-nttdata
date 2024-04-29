import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableFooterComponent } from './components/table-footer/table-footer.component';
import { ProductsComponent } from './pages/all-products-page/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ProductRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    TableFooterComponent,
    ProductsComponent,
    SearchInputComponent,
    AddProductComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    ReactiveFormsModule,
  ],
})
export class ProductsModule {}
