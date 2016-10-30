import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";
import baseURL from "./network";
import { NewsField } from "./models/newsField";

@Injectable()
export class NewsApiService {
  baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = baseURL;

  }

  fetchNews(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all-news`)
      .map(response => response.json())
  }

  fetchOneNew(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/one-new/${id}`)
      .map(response => response.json())
  }

  saveNews(news: NewsField): Observable<any> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(`${this.baseUrl}/add-news`, JSON.stringify(news), options)
      .map(response => response.json())
  }

}
