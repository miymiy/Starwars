import { ActionType, createAction } from 'typesafe-actions';

export enum PageActionTypes {
  SetLoading = 'page/loading/set',
  SetError = 'page/error/set',
}

export const pageActions = {
  setLoading: createAction(PageActionTypes.SetLoading)<boolean>(),
  setError: createAction(PageActionTypes.SetError)<string>(),
};

export type PageActions = ActionType<typeof pageActions>;
