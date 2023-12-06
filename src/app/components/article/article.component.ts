import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {


  @Input() article: Article | null = null;

  constructor() { }

  onCardClick() {
    const openCapacitorSite = async () => {
      await Browser.open({ url: this.article?.url ?? 'http://capacitorjs.com/' });
    };
    openCapacitorSite();
  }

}
