import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PhraseService } from 'src/app/services/phrase.service';
import { PHRASES } from 'src/app/shared/mockData';
import { Phrase } from 'src/app/shared/phrase';

@Component({
  selector: 'app-phrases-list',
  templateUrl: './phrases-list.component.html',
  styleUrls: ['./phrases-list.component.css'],
})
export class PhrasesListComponent implements OnInit {
  phrases!: Phrase[];
  private selectedID!: number

  constructor(
    private phraseService: PhraseService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe( (params: Params) => {
      console.log(params)
      this.selectedID = +params['id']
      this.phraseService.getAllPhrases().then((res) => (this.phrases = res));
    })
  }

  onSelect(phrase: Phrase) {
    // первым аргументом указывается идентификатор для относительного пути
    // вторым аргументом передается объект с информацией о текущем маршруте
    // теперь маршрут относительный, мы получили тоже самое, но другим способом
    this.router.navigate([phrase.id], {relativeTo: this.activatedRoute} )
  }

  isSelected(phrase: Phrase): boolean {
    return phrase.id === this.selectedID
  }
}
