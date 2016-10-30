import { Component, OnInit } from '@angular/core';
import { NewsField } from "../models/newsField";
import { NewsApiService } from "../news-api.service";

@Component({
  selector: 'app-new-news',
  templateUrl: './new-news.component.html',
  styleUrls: ['./new-news.component.scss']
})
export class NewNewsComponent implements OnInit {

  news: NewsField;

  constructor(private _newsApi: NewsApiService) {
    this.news= new NewsField()
  }

  ngOnInit() {
  }

  saveNews() {
    this._newsApi.saveNews(this.news).subscribe(
      succ=> console.log("done"),
      fail=> console.log("fail")
    )
  }

}
