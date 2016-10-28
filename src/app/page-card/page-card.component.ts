import {Component, OnInit, Input} from '@angular/core';
import {PageCard} from "../models/pageCard";

@Component({
  selector: 'page-card',
  templateUrl: './page-card.component.html',
  styleUrls: ['page-card.component.scss']
})
export class PageCardComponent implements OnInit {

  @Input() pageCard: PageCard;

  constructor() {
  }

  ngOnInit() {

  }

  click(event) {

    window.location.href = this.pageCard.link;

  }

}
