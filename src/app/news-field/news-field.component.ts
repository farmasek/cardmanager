import {Component, OnInit, Inject, Input} from '@angular/core';
import {NewsField} from "../models/newsField";

@Component({
  selector: 'news-field',
  templateUrl: './news-field.component.html',
  styleUrls: ['./news-field.component.scss']
})
export class NewsFieldComponent implements OnInit {

  @Input() newsField: NewsField;

  constructor() {
  }

  ngOnInit() {
  }

}
