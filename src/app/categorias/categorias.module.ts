import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { ShowCategoriesComponent } from './pages/show-categories/show-categories.component';
import { ListCategoriesComponent } from './pages/list-categories/list-categories.component';
import { CreateCategoriesComponent } from './pages/create-categories/create-categories.component';


@NgModule({
  declarations: [ShowCategoriesComponent, ListCategoriesComponent, CreateCategoriesComponent],
  imports: [
    CommonModule,
    CategoriasRoutingModule
  ]
})
export class CategoriasModule { }
