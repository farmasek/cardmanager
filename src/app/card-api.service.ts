import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import baseURL from './network';
import {PageCard, mapToCard} from "./models/pageCard";

@Injectable()
export class CardApiService {
  baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = baseURL;
  }

  fetchCards(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all-cards`)
      .map(response => response.json().map(mapToCard))
  }


  saveCard(card: PageCard): Observable<any> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post(`${this.baseUrl}/add-card`, JSON.stringify(card), options)
      .map(response => response.json())
  }

}
