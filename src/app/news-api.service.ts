import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {baseURL} from "./network";

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
}
