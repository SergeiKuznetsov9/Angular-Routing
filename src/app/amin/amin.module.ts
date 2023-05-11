import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AminRoutingModule } from './amin-routing.module';
import { HomeComponent } from './home/home.component';
import { ManagePhrasesComponent } from './manage-phrases/manage-phrases.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';


@NgModule({
  declarations: [
    HomeComponent,
    ManagePhrasesComponent,
    ManageUsersComponent
  ],
  imports: [
    CommonModule,
    AminRoutingModule
  ]
})
export class AminModule { }
