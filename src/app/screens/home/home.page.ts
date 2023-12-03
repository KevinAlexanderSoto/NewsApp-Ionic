import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public newsList: Article[] = [];

  constructor(private newsService: NewsService) { }
  ngOnInit(): void {
    this.newsService.getTopHeadLines().subscribe(news => {
      this.newsList.push( ... news);
      console.log(news);
    });
  }

}
