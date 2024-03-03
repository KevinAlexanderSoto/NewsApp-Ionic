import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Article } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  private _storage: Storage | null = null;
  private _articleArray: Article[] = [];

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
    this.updateArticlesArray();
  }


  public async setRemoveFavoriteNews(article: Article) {
    if (this._articleArray.some((internalArticle) => internalArticle.title === article.title)) {
      this._articleArray = this._articleArray.filter((internalArticle) => internalArticle.title !== article.title);
    } else {
      this._articleArray.push(article);
    }

    this._storage?.set("favoriteArticle", this._articleArray);
  }

  get getFavoriteNews(): Article[] {
    return [... this._articleArray]
  }

  async updateArticlesArray() {
    const internalArtucle = await this._storage?.get('favoriteArticle');
    this._articleArray = internalArtucle;
  }
}
