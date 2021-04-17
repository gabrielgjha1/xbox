import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SidvarComponent } from './pages/sidvar/sidvar.component';


@NgModule({
  declarations: [SidvarComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[SidvarComponent]
})
export class SharedModule { }
