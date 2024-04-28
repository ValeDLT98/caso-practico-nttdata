import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/pages/all-products-page/products.component';

const routes: Routes = [
  {
    path: 'productos',
    component: ProductsComponent,
  },
  { path: '**', redirectTo: 'productos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
