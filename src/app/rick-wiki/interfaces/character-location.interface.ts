export interface CharacterLocalitationResponse {
  info:    CharacterLocationInfo;
  results: CharacterLocationResult[];
}

export interface CharacterLocationInfo {
  count: number;
  pages: number;
  next:  string;
  prev:  null;
}

export interface CharacterLocationResult {
  id:        number;
  name:      string;
  type:      string;
  dimension: string;
  residents: string[];
  url:       string;
  created:   Date;
}
