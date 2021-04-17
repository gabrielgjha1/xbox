import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { CreateProductsComponent } from './pages/create-products/create-products.component';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import { ShowProductsComponent } from './pages/show-products/show-products.component';


@NgModule({
  declarations: [CreateProductsComponent, ListProductsComponent, ShowProductsComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
