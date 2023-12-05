import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Article, NewsResponse } from '../interfaces';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const apiKey = environment.apiKey
const mainUrl = environment.sourceUrl

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient: HttpClient) { }

  getTopHeadLines(): Observable<Article[]> {
    return this.httpClient.get<NewsResponse>(`${mainUrl}top-headlines?country=us&category=business`, {
      params: {
        apiKey: apiKey,
      }
    }).pipe(
      map(res => res.articles)
    );
  }
  getNewsByCategory(category: string): Observable<Article[]> {
    return this.httpClient.get<NewsResponse>(`${mainUrl}top-headlines?country=us&category=${category}`, {
      params: {
        apiKey: apiKey,
      }
    }).pipe(
      map(res => res.articles)
    );
  }

}
