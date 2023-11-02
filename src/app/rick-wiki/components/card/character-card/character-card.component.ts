import { Component, HostListener, OnInit } from '@angular/core';
import { CharacterResult } from 'src/app/rick-wiki/interfaces/character.interface';
import { RickApiWikiService } from 'src/app/rick-wiki/services/rick-api-wiki.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {

  public characterList: CharacterResult[]=[];
  constructor(private rickApiWikiService: RickApiWikiService) { }

  ngOnInit(): void {
    this.rickApiWikiService.characterListBehavior.subscribe(characterList => {
      this.characterList = characterList;
  });
    this.rickApiWikiService.getCharacters();
  }


  //infinite scroll
  @HostListener('window:scroll')
  onScroll() {
    const docHeight = document.documentElement.getBoundingClientRect().height;
    const amountScrolled = document.documentElement.scrollTop + window.innerHeight + 75;
    const initialGet = this.characterList.length === 0;

    if (!initialGet && (amountScrolled >= docHeight)) {

      this.rickApiWikiService.getCharacters();
    }
  }

}
