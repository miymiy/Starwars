import { Film } from 'models/film';
import { Person } from 'models/person';

import { FilmModel, PersonModel } from './models';

export const personModelToPerson = (from: PersonModel): Person => ({
  name: from.name,
  height: from.height,
  birthYear: from.birth_year,
  filmUrls: from.films,
  mass: from.mass,
  gender: from.gender,
  id: from.url,
});

export const filmModelToFilm = (from: FilmModel): Film => ({
  title: from.title,
  date: from.release_date,
});
