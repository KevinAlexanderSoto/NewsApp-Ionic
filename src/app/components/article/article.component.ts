import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces';
import { Browser } from '@capacitor/browser';
import { Share } from '@capacitor/share';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {


  @Input() article: Article | null = null;
  isActionSheetOpen = false;

  constructor() { }

  onCardClick() {
    const openCapacitorSite = async () => {
      await Browser.open({ url: this.article?.url ?? 'http://capacitorjs.com/' });
    };
    openCapacitorSite();
  }
  onMoreIconClick(isOpen: boolean) {
    this.isActionSheetOpen = isOpen;
  }

  async onShareArticleClick() {
    await Share.share({
      url: this.article?.url ?? 'http://capacitorjs.com/',
    });
  }
  onAddToFavoriteClick() {
  }
  public actionSheetButtons = [
    {
      text: 'Share',
      data: {
        action: 'share',
      },
      handler: () => this.onShareArticleClick(),
    },
    {
      text: 'Add to favorites',
      data: {
        action: 'addFavorite',
      },
      handler: () => this.onAddToFavoriteClick(),
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    }
  ];
}
