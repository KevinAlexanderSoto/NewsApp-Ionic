import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewsResponse } from '../interfaces';

const apiKey = environment.apiKey
const mainUrl = environment.sourceUrl

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient: HttpClient) { }

  getTopHeadLines() {
    return this.httpClient.get<NewsResponse>(`${mainUrl}top-headlines?sources=techcrunch}`, {
      params: {
        apiKey: apiKey,
      }
    });
  }
}
