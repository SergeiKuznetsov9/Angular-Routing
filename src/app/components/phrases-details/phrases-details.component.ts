import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PhraseService } from 'src/app/services/phrase.service';
import { PHRASES } from 'src/app/shared/mockData';
import { Phrase } from 'src/app/shared/phrase';

@Component({
  selector: 'app-phrases-details',
  templateUrl: './phrases-details.component.html',
  styleUrls: ['./phrases-details.component.css'],
})
export class PhrasesDetailsComponent implements OnInit {
  phrase!: Phrase | undefined;

  constructor(
    private phraseService: PhraseService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((el: Params) => {
      const id = +el['id'];
      if (isNaN(id)) return;
      this.phraseService.getPhrase(id).then((res) => (this.phrase = res));
    });
  }

  goToPhrasesList() {
    // в аргументе-массиве первое значение - это путь; второе - необязательные параметры - может быть какой нибудь объект
    // сюда можно закинуть, к примеру, id актуального элемента, чтобы зафиксировать на следующем роуте адрес, с которого мы пришли

    // благодаря этому при возврате на список будет подсвечен элемент, с которого мы пришли (на кнопку возврата
    // к списку прикручено добавление параметра маршрута)
    this.router.navigate(['/phrases', { id: this.phrase?.id, param1: 'test', param: '123' }]);
  }
}
