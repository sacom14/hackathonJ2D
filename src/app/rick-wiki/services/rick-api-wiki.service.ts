import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterResponse, CharacterResult } from '../interfaces/character.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickApiWikiService {

  private _characterList: CharacterResult[] = [];
  private _characterListBehavior = new BehaviorSubject<CharacterResult[]>(this._characterList);

  private _rickApiCharactersUrl: string = 'https://rickandmortyapi.com/api/character?page=';

  private _characterPagesNum: number = 1;

  private _tagsHistory: string[] = [];

  //characters page
  public searchTag: string = '';
  public statusTag: string = '';
  public genderTag: string = '';
  public specieTag: string = '';


  //getters
  get characterList() {
    return this._characterList;
  }

  get characterListBehavior() {
    return this._characterListBehavior.asObservable();
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }
  // -----Character page--------
  getCharacters() {

    const params = new HttpParams()
      .set('name', this.searchTag)
      .set('status', this.statusTag)
      .set('gender', this.genderTag)
      .set('species', this.specieTag)

    if (this._characterPagesNum <= 42 && this._characterPagesNum > 0) {
      this.http.get<CharacterResponse>(`${this._rickApiCharactersUrl}${this._characterPagesNum}`, { params }).subscribe(resp => {
        this.characterList.push(...resp.results);
        this._characterPagesNum++;
      });
    }
    this._characterListBehavior.next(this.characterList);
  }

  takeSearchTag(tag: string) {
    this.resetParameters();
    this.searchTag = tag;
    this.getCharacters();
  }

  takeStatusTag(tag: string) {
    this.resetParameters();
    this.statusTag = tag;
    this.getCharacters();
  }
  takeGenderTag(tag: string) {
    this.resetParameters();
    this.genderTag = tag;
    this.getCharacters();
  }
  takeSpecieTag(tag: string) {
    this.resetParameters();
    this.specieTag = tag;
    this.getCharacters()
  }
  resetParameters() {
    this._characterList = [];
    this._characterPagesNum = 1;
  }

  resetFilters() {
    this.searchTag = '';
    this.statusTag = '';
    this.genderTag = '';
    this.specieTag = '';
  }

  //remove the filters
  removeAllFilters() {
    this.resetParameters();
    this.resetFilters();
    this._tagsHistory = [];
    this.removeLocalStorage();
    this.getCharacters();
  }

  //-------search history-----------
  public organizeHistory(tag: string) {
    if (tag.length === 0) {
      this.getCharacters();
    }
    tag = tag.toLocaleLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag) //review if we have the same tag in our tagsHistory
    }

    this._tagsHistory.unshift(tag); //we put on start our new tag
    this._tagsHistory = this.tagsHistory.splice(0, 5); //limit to 5 max tags on history
    this.saveLocalStorage();
    this.takeSearchTag(tag);
  }

  //save history search tag on localstorage
  private saveLocalStorage(): void {
    localStorage.setItem('historyTag', JSON.stringify(this._tagsHistory));
  }

  //load the localStorage data
  private loadLocalStorage(): void {

    if (!localStorage.getItem('historyTag')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('historyTag')!);

    if (this._tagsHistory.length === 0) return;
    this.takeSearchTag(this._tagsHistory[0]);
  }

  private removeLocalStorage(): void {
    localStorage.removeItem('historyTag');
  }


}
