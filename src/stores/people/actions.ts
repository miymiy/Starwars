import { Person } from 'models/person';
import { ActionType, createAction } from 'typesafe-actions';

export enum PeopleActionTypes {
  Init = 'people/init',
  Fetch = 'people/fetch',
  Set = 'people/set',
  NextPage = 'people/page/next',
  PrevPage = 'people/page/prev',
}

export const peopleActions = {
  init: createAction(PeopleActionTypes.Init)(),
  fetch: createAction(PeopleActionTypes.Fetch)<{ url: string }>(),
  set: createAction(PeopleActionTypes.Set)<{
    nextPage?: string;
    prevPage?: string;
    people: Person[];
  }>(),
};

export type PeopleActions = ActionType<typeof peopleActions>;
