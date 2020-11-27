import { Film } from 'models/film';
import { ActionType, createAction } from 'typesafe-actions';

export enum FilmActionTypes {
  Fetch = 'films/fetch',
  Set = 'films/set',
}

export const filmActions = {
  fetch: createAction(FilmActionTypes.Fetch)<{ urls: string[] }>(),
  set: createAction(FilmActionTypes.Set)<{ films: Film[] }>(),
};

export type FilmActions = ActionType<typeof filmActions>;
