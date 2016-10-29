import {Component, OnInit} from '@angular/core';
import {NewsApiService} from "../news-api.service";
import {NewsField, mapToNewsField} from "../models/newsField";
import {getFakeSvgHttpResponse} from "@angular/material/icon/fake-svgs";

@Component({
  selector: 'app-news-bar',
  templateUrl: './news-bar.component.html',
  styleUrls: ['./news-bar.component.scss'],
})
export class NewsBarComponent implements OnInit {

  newsArray: Array<NewsField>;

  constructor(private _newsApi: NewsApiService) {
  }

  ngOnInit() {
    this._newsApi.fetchNews().subscribe(
      result => this.newsArray = result.map(mapToNewsField),
      error => console.log("Error fetching news")
    )
  }

}
