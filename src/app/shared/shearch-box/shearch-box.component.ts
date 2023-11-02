import { Component, ElementRef, ViewChild } from '@angular/core';
import { RickApiWikiService } from 'src/app/rick-wiki/services/rick-api-wiki.service';

@Component({
  selector: 'app-shearch-box',
  templateUrl: './shearch-box.component.html',
  styleUrls: ['./shearch-box.component.scss']
})
export class ShearchBoxComponent {
  //direct reference to the templateUrl
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>; //reference to a HTML element

  constructor (private rickApiWikiService: RickApiWikiService ) {}

  //searchTag must receive newTag that we pick on searchbar
  searchTag(){
    const searchTag = this.tagInput.nativeElement.value;
    this.rickApiWikiService.organizeHistory(searchTag);
    this.tagInput.nativeElement.value = "";
  }
}
