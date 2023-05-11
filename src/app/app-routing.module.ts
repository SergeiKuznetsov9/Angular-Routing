import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { NoPageComponent } from './components/no-page/no-page.component';
import { ChildAComponent } from './components/first/child-a/child-a.component';
import { ChildBComponent } from './components/first/child-b/child-b.component';
import { SecondaryRoutComponent } from './components/secondary-rout/secondary-rout.component';

const routes: Routes = [
  // Тут указываем сведения по марщрутам

  {
    path: 'first-component', component: FirstComponent,
    children: [
      {path: 'child-a', component: ChildAComponent},
      {path: 'child-b', component: ChildBComponent}
    ]
  },
  { path: 'second-component', component: SecondComponent },

  // Так добавляется второстепенный маршрут
  {path: 'secondary-path', component: SecondaryRoutComponent, outlet: 'secondary'},
  
  { path: '',   redirectTo: '/first-component', pathMatch: 'full' },
  // Этот подойдет для любого маршрута, поэтому укажем его последним
  { path: '**', component: NoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
