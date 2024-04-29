import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/pages/all-products-page/products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    pathMatch: 'full',
  },
  {
    path: 'productos',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
  { path: '**', redirectTo: 'productos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
