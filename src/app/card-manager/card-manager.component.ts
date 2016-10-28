import {Component, OnInit} from '@angular/core';
import {PageCard, cardList, mapToCard} from "../models/pageCard";
import {CardApiService} from "../card-api.service";

@Component({
  selector: 'app-card-manager',
  templateUrl: './card-manager.component.html',
  styleUrls: ['card-manager.component.scss']
})
export class CardManagerComponent implements OnInit {

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
