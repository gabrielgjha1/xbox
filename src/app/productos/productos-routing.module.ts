import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductsComponent } from './pages/create-products/create-products.component';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import { ShowProductsComponent } from './pages/show-products/show-products.component';


const routes: Routes = [

  {

    path:'',
    children:[
      {path:'',component:ListProductsComponent},
      {path:'show',component:ShowProductsComponent},
      {path:'create',component:CreateProductsComponent},
      {path:'**',redirectTo:''},
    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
