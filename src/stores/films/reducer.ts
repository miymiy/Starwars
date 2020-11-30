import { Film } from 'models/film';
import { getType } from 'typesafe-actions';

import { FilmActions, filmActions } from './actions';

export interface State {
  films?: Film[];
  loading: boolean;
}

export const initialState: State = { loading: false };

export default (state: State = initialState, action: FilmActions) => {
  switch (action.type) {
    case getType(filmActions.set):
      return {
        loading: false,
        films: action.payload.films,
      };
    case getType(filmActions.fetch):
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
