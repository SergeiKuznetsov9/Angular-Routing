import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhraseHomeComponent } from '../components/phrase-home/phrase-home.component';
import { PhrasesDetailsComponent } from '../components/phrases-details/phrases-details.component';
import { PhrasesListComponent } from '../components/phrases-list/phrases-list.component';

const routes: Routes = [
  // показана реализация относительных маршрутов 
  { path: 'phrases', component: PhrasesListComponent },
  { path: 'phrases/:id', component: PhrasesDetailsComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhrasesRoutingModule {}
