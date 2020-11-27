import { Gender } from 'models/person';

export interface PersonModel {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
  gender: Gender;
  films: string[];
  url: string;
}

export interface PeopleResponse {
  next?: string;
  previous?: string;
  results: PersonModel[];
}

export interface FilmModel {
  title: string;
  release_date: string;
}
