import { Component, OnInit } from '@angular/core';
import { PageCard, mapToCard } from "../models/pageCard";
import { CardApiService } from "../card-api.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  pageCardArray: Array<PageCard>;

  constructor(private _cardApi: CardApiService) {
  }

  ngOnInit() {
    this._cardApi.fetchCards()
      .subscribe(
        result => this.pageCardArray = result.map(mapToCard),
        error => console.log('error fetching cards')
      );

  }

}
