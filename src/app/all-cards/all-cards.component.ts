import {Component, OnInit} from '@angular/core';
import {PageCard} from "../models/pageCard";
import {CardApiService} from "../card-api.service";

@Component({
  selector: 'app-all-cards',
  templateUrl: './all-cards.component.html',
  styleUrls: ['./all-cards.component.scss']
})
export class AllCardsComponent implements OnInit {

  allCards: Array<PageCard>

  constructor(private _cardAPI: CardApiService) {
  }

  ngOnInit() {
    this._cardAPI.fetchCards().subscribe(
      cards =>
        this.allCards = cards,
      error => console.log("error")
    )
  }

}
