import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { MatCommonModule } from '@angular/material/core';
import { MaterialModuleModule } from '../material-module/material-module.module';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MaterialModuleModule
  ]
})
export class InicioModule { }
