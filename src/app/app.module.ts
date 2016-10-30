import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PageCardComponent } from './page-card/page-card.component';
import { CardManagerComponent } from './card-manager/card-manager.component';
import { MaterialModule } from "@angular/material";
import { CardApiService } from './card-api.service';
import { NewsBarComponent } from './news-bar/news-bar.component';
import { NewsFieldComponent } from './news-field/news-field.component'
import { NewsApiService } from "./news-api.service";
import { RouterModule } from '@angular/router';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { CardsComponent } from './cards/cards.component';
import { ManagementComponent } from './management/management.component';
import { LoginComponent } from './login/login.component';
import { ManagementholderComponent } from './managementholder/managementholder.component';
import { NewCardComponent } from './new-card/new-card.component';
import { NewNewsComponent } from './new-news/new-news.component'

@NgModule({
  declarations: [
    AppComponent,
    PageCardComponent,
    CardManagerComponent,
    NewsBarComponent,
    NewsFieldComponent,
    NewsDetailComponent,
    CardsComponent,
    ManagementComponent,
    LoginComponent,
    ManagementholderComponent,
    NewCardComponent,
    NewNewsComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '', component: CardManagerComponent,
        children: [
          {
            path: '',
            children: [
              {path: '', component: CardsComponent},
              {path: 'news/:id', component: NewsDetailComponent},
            ]
          }
        ]
      },
      {
        path: 'management', component: ManagementComponent,
        children: [
          {path: 'login', component: LoginComponent},
          {
            path: 'management', component: ManagementholderComponent,
            children: [
              {path: 'add-card', component: NewCardComponent},
              {path: 'add-news', component: NewNewsComponent},
              {path: 'all-cards', component: ManagementholderComponent},
              {path: 'all-news', component: ManagementholderComponent},
              {path: '', component: LoginComponent}
            ]
          },
          {path: '', component: LoginComponent}
        ]

      },
    ])
  ],
  providers: [CardApiService, NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
