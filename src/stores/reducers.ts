import { combineReducers } from 'redux';

import { FilmActions } from './films/actions';
import filmReducer, { State as FilmState } from './films/reducer';
import { PageActions } from './page/actions';
import pageReducer, { State as PageState } from './page/reducer';
import { PeopleActions } from './people/actions';
import peopleReducer, { State as PeopleState } from './people/reducer';

export interface RootState {
  people: PeopleState;
  page: PageState;
  films: FilmState;
}

export type RootActions = PeopleActions | PageActions | FilmActions;

export default combineReducers<RootState>({
  people: peopleReducer,
  page: pageReducer,
  films: filmReducer,
});
