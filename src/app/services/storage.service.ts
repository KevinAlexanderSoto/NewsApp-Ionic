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
  }


  public async setRemoveFavoriteNews(article: Article) {
    await this.updateArticlesArray();
    if (this._articleArray.some((internalArticle) => internalArticle.title === article.title)) {
      this._articleArray = this._articleArray.filter((internalArticle) => internalArticle.title !== article.title);
    } else {
      this._articleArray.push(article);
    }

    this._storage?.set("favoriteArticle", this._articleArray);
  }

  public async getFavoriteNews(): Promise<Article[]> {
    await this.updateArticlesArray();
    return this._articleArray
  }

  private async updateArticlesArray() {
    await this._storage?.get("favoriteArticle").then((storageArticle) => {
      if (storageArticle != null) {
        this._articleArray = storageArticle
      }
    })
  }
}
