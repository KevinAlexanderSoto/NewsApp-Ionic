import { Component, OnInit } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/angular';
import { IonSegmentCustomEvent } from '@ionic/core';
import { NewsService } from '../../services/news.service';
import { Article } from 'src/app/interfaces';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  readonly categories: string[] = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

  readonly initialSelectecCategory: string = this.categories[0];
  public currentArticles: Article[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getNewsByCategory(this.initialSelectecCategory);
  }

  onSegmentChanged(event: IonSegmentCustomEvent<SegmentChangeEventDetail>) {
    this.getNewsByCategory(event.detail.value?.toString() ?? '');
  }

  private getNewsByCategory(category: string) {
    return this.newsService.getNewsByCategory(category).subscribe(articles => {
      this.currentArticles = [];
      this.currentArticles.push(...articles);
    });
  }
}
