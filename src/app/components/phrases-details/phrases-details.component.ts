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

  // когда мы находимся в этом компоненте, у нас адрес: '/phrases/id'. Нам нужно подняться выше, а это записывается как ../
  // если мы используем относительную маршрутизацию, нам нужно добавить второй параметр (объект)
  goToPhrasesList() {
    this.router.navigate(['../', { id: this.phrase?.id, param1: 'test', param: '123' }], {relativeTo: this.activatedRoute});
  }
}
