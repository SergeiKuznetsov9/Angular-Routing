import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhrasesRoutingModule } from './phrases-routing.module';
import { PhrasesListComponent } from '../components/phrases-list/phrases-list.component';
import { PhrasesDetailsComponent } from '../components/phrases-details/phrases-details.component';
import { PhraseHomeComponent } from '../components/phrase-home/phrase-home.component';


@NgModule({
  declarations: [
    PhrasesListComponent,
    PhrasesDetailsComponent,
    PhraseHomeComponent,
  ],
  imports: [
    CommonModule,
    PhrasesRoutingModule,
  ]
})
export class PhrasesModule { }
