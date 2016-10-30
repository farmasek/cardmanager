import { Component, OnInit } from '@angular/core';
import { PageCard, cardList, mapToCard } from "../models/pageCard";
import { CardApiService } from "../card-api.service";

@Component({
  selector: 'app-card-manager',
  templateUrl: './card-manager.component.html',
  styleUrls: ['card-manager.component.scss']
})
export class CardManagerComponent implements OnInit {

  // pageCardArray: Array<PageCard>;
  showMenu = false;

  constructor() {
  }

  ngOnInit() {
    // this._cardApi.fetchCards()
    //   .subscribe(
    //     result => this.pageCardArray = result.map(mapToCard),
    //     error => console.log('error fetching cards')
    //   );

  }

  menuButtonClick() {
    this.showMenu = !this.showMenu;
    console.log(this.showMenu)
  }


}
