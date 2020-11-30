import { getType } from 'typesafe-actions';

import { PageActions, pageActions } from './actions';

export interface State {
  error?: string;
}

export const initialState: State = {};

export default (state: State = initialState, action: PageActions) => {
  switch (action.type) {
    case getType(pageActions.setError):
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
