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
    private activatedRout: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRout.params.subscribe( (params: Params) => {
      console.log(params)
      this.selectedID = +params['id']
      this.phraseService.getAllPhrases().then((res) => (this.phrases = res));
    })
  }

  onSelect(phrase: Phrase) {
    console.log(phrase.id)
    this.router.navigate(['phrases', phrase.id])
  }

  isSelected(phrase: Phrase): boolean {
    return phrase.id === this.selectedID
  }
}
