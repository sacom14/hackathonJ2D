import { CharacterLocationResult } from "./character-location.interface";

export interface CharacterResponse {
  info:    CharacterInfo;
  results: CharacterResult[];
}

export interface CharacterInfo {
  count: number;
  pages: number;
  next:  string;
  prev:  null;
}

export interface CharacterResult {
  id:       number;
  name:     string;
  status:   CharacterStatus;
  species:  CharacterSpecies;
  type:     string;
  gender:   CharacterGender;
  origin:   CharacterLocationResult;
  location: CharacterLocationResult;
  image:    string;
  episode:  string[];
  url:      string;
  created:  Date;
}

export enum CharacterGender {
  Female = "Female",
  Male = "Male",
  Genderless = "Genderless",
  Unknown = "unknown",
}

export interface CharacterLocation {
  name: string;
  url:  string;
}

export enum CharacterSpecies {
  Alien = "Alien",
  Human = "Human",
  Humanoid = "Humanoid",
  Poopybutthole = "Poppybutthole",
  Animal = "Animal",
  Disease = "Disease",
  Cronenberg = "Cronenberg",
  Planet = "Planet",
  Mythological = "Mythological",
  Robot = "Robot",
  Unknown = "Unknown",
}

export enum CharacterStatus {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}
