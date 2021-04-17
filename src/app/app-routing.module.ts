import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {

    path:'index',
    loadChildren:()=>import('./inicio/inicio.module').then(m=>m.InicioModule)

  },
  {

    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)

  },

  {

    path:'products',
    loadChildren:()=>import('./productos/productos.module').then(m=>m.ProductosModule)

  },

  {

    path:'user',
    loadChildren:()=>import('./users/users.module').then(m=>m.UsersModule)

  },
  {
    path:'**',
    redirectTo:'index'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
