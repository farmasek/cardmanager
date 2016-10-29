import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {PageCardComponent} from './page-card/page-card.component';
import {CardManagerComponent} from './card-manager/card-manager.component';
import {MaterialModule} from "@angular/material";
import {CardApiService} from './card-api.service';
import {NewsBarComponent} from './news-bar/news-bar.component';
import {NewsFieldComponent} from './news-field/news-field.component'
import {NewsApiService} from "./news-api.service";


@NgModule({
  declarations: [
    AppComponent,
    PageCardComponent,
    CardManagerComponent,
    NewsBarComponent,
    NewsFieldComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CardApiService, NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
