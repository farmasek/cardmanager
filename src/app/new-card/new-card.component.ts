import { Component, OnInit } from '@angular/core';
import { PageCard } from "../models/pageCard";
import { CardApiService } from "../card-api.service";

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent implements OnInit {

  card: PageCard;

  constructor(private _cardApi: CardApiService) {
    // this.card = new PageCard("L", "name", "desc", "link", "red")
    this.card = new PageCard("", "", "", "", "");
  }

  ngOnInit() {
  }

  saveCard() {
    this._cardApi.saveCard(this.card).subscribe(
      result=> console.log("sucessful"),
      result=> console.log("error")
    )
  }
}
