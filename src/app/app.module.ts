import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardAnimeComponent } from './shared/components/card-anime/card-anime.component';
import { AnimeComponent } from './components/anime/anime.component';
import { AnimeDetailComponent } from './components/anime-detail/anime-detail.component';
import { EpisodioComponent } from './components/episodio/episodio.component';
import { EpisodioListComponent } from './components/episodio-list/episodio-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CardAnimeComponent,
    AnimeComponent,
    AnimeDetailComponent,
    EpisodioComponent,
    EpisodioListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
