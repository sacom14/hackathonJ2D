import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterPageComponent } from './pages/character-page/character-page.component';
import { CharacterCardComponent } from './components/card/character-card/character-card.component';
import { SharedModule } from '../shared/shared.module';
import { EpisodesPageComponent } from './pages/episodes-page/episodes-page.component';



@NgModule({
  declarations: [
    CharacterPageComponent,
    CharacterCardComponent,
    EpisodesPageComponent,

  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class RickWikiModule { }
