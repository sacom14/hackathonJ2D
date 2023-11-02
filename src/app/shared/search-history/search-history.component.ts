import { RickApiWikiService } from 'src/app/rick-wiki/services/rick-api-wiki.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.scss']
})
export class SearchHistoryComponent {

  constructor( private rickApiWikiService: RickApiWikiService ){}

  get tagsHistory():string[] {
    return this.rickApiWikiService.tagsHistory;
  }

  //after click the history tag button
  searchTag(searchTag: string):void{
    // this.rickApiWikiService.takeSearchTag(tag);
    this.rickApiWikiService.organizeHistory(searchTag);

  }
}
