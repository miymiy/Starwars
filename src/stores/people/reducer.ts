import { Person } from 'models/person';
import { getType } from 'typesafe-actions';

import { PeopleActions, peopleActions } from './actions';

export interface State {
  people?: Person[];
  nextPage?: string;
  prevPage?: string;
  loading: boolean;
}

export const initialState: State = { loading: false };

export default (state: State = initialState, action: PeopleActions) => {
  switch (action.type) {
    case getType(peopleActions.fetch):
    case getType(peopleActions.init):
      return {
        ...state,
        loading: true,
      };
    case getType(peopleActions.set): {
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};
