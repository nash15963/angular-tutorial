import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './HeroPage/dashboard/dashboard.component';
import { HeroesComponent } from './HeroPage/heroes/heroes.component';
import { HeroSearchComponent } from './HeroPage/hero-search/hero-search.component';
import { HeroDetailComponent } from './HeroPage/hero-detail/hero-detail.component';
import { MessagesComponent } from './HeroPage/messages/messages.component';
import { InMemoryDataService } from './in-memory-data.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PokePageComponent } from './PokePage/poke-page/poke-page.component';
import { PokeComponent } from './PokePage/poke/poke.component';
import { HeroPageComponent } from './HeroPage/hero-page/hero-page.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    HeaderComponent,
    HomeComponent,
    PokePageComponent,
    PokeComponent,
    HeroPageComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
