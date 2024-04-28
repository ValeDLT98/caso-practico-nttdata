import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TableFooterComponent } from './components/table-footer/table-footer.component';
import { ProductsComponent } from './pages/all-products-page/products.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TableFooterComponent, ProductsComponent],
  imports: [CommonModule, FormsModule],
})
export class ProductsModule {}
