import { Component, OnInit } from '@angular/core';
import { NewsField, mapToNewsField } from "../models/newsField";
import { ActivatedRoute } from "@angular/router";
import { NewsApiService } from "../news-api.service";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  oneNew: NewsField;

  constructor(private route: ActivatedRoute,
              private _newsApi: NewsApiService) {
  }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._newsApi
          .fetchOneNew(id)
          .subscribe(response => this.oneNew = response);
      });
  }

}
