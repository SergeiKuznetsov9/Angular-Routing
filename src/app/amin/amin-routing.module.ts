import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';
import { HomeComponent } from './home/home.component';
import { ManagePhrasesComponent } from './manage-phrases/manage-phrases.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';

const routes: Routes = [
  {
    path: 'admin',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'phrases', component: ManagePhrasesComponent},
      {path: 'users', component: ManageUsersComponent},
      {path: '', redirectTo: 'phrases', pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AminRoutingModule { }
