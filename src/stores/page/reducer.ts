import { getType } from 'typesafe-actions';

import { PageActions, pageActions } from './actions';

export interface State {
  loading: boolean;
  error?: string;
}

const initialState: State = {
  loading: false,
};

export default (state: State = initialState, action: PageActions) => {
  switch (action.type) {
    case getType(pageActions.setLoading):
      return {
        ...state,
        loading: action.payload,
      };
    case getType(pageActions.setError):
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
