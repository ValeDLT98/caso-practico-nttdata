import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/all-products-page/products.component';
import { AddProductComponent } from './pages/add-product/add-product.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },

  {
    path: 'agregar',
    component: AddProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class ProductRoutingModule {}
