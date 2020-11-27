import { ActionType, createAction } from 'typesafe-actions';

export enum PageActionTypes {
  SetError = 'page/error/set',
}

export const pageActions = {
  setError: createAction(PageActionTypes.SetError)<string>(),
};

export type PageActions = ActionType<typeof pageActions>;
