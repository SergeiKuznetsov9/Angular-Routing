import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhraseHomeComponent } from '../components/phrase-home/phrase-home.component';
import { PhrasesDetailsComponent } from '../components/phrases-details/phrases-details.component';
import { PhrasesListComponent } from '../components/phrases-list/phrases-list.component';

const routes: Routes = [

  // так выглядели маршруты до того как мы решили добавить дочерний маршрут
  // после этого роутинг в этом модуле был переписан
  /* { path: 'phrases', component: PhrasesListComponent },
  { path: 'phrase/:id', component: PhrasesDetailsComponent }, */


  // если мы хотим в outlet PhraseHomeComponent выгрузить другие компоненты, мы пишем так:
  { 
    path: 'phrases',
    component: PhraseHomeComponent,
    children: [      
      {path: '', component: PhrasesListComponent,

      // тут мы решили у PhrasesListComponent создать свой outlet и тогда мы все повторяем:
        children: [
          // здесь пути указываются относительно 'phrases'
          {path: ':id', component: PhrasesDetailsComponent}
        ]
      }



    ]

  }
];

// он дочерний, в нем используется forChild
// чтобы он работал, его нужно подключить в app module

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhrasesRoutingModule {}
