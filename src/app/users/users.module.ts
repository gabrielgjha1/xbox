import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { ShowBuyComponent } from './pages/show-buy/show-buy.component';


@NgModule({
  declarations: [EditProfileComponent, ShowBuyComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
