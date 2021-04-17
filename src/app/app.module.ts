import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersModule } from './users/users.module';
import { ProductosModule } from './productos/productos.module';
import { CategoriasModule } from './categorias/categorias.module';
import { AuthModule } from './auth/auth.module';
import { MaterialModuleModule } from './material-module/material-module.module';
import { SidvarComponent } from './shared/pages/sidvar/sidvar.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UsersModule,
    ProductosModule,
    CategoriasModule,
    AuthModule,
    MaterialModuleModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
