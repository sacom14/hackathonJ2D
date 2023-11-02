import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterPageComponent } from './pages/character-page/character-page.component';
import { CharacterCardComponent } from './components/card/character-card/character-card.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CharacterPageComponent,
    CharacterCardComponent,

  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class RickWikiModule { }
