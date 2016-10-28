import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import baseURL from './network';

@Injectable()
export class CardApiService {
  baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = baseURL;
  }

  fetchCards(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all-cards`)
      .map(response => response.json())
  }

}
