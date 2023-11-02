import { Component } from '@angular/core';
import { RickApiWikiService } from 'src/app/rick-wiki/services/rick-api-wiki.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  constructor(private rickApiWikiService: RickApiWikiService) { }

  filterStatus(statusTag: string): void {
    this.rickApiWikiService.takeStatusTag(statusTag);
  }

  filterGender(genderTag: string): void {
    this.rickApiWikiService.takeGenderTag(genderTag);
  }

  filterSpecie(specieTag: string):void{
    this.rickApiWikiService.takeSpecieTag(specieTag);
  }

  removeFilters() {
    this.rickApiWikiService.removeAllFilters();
  }

}
