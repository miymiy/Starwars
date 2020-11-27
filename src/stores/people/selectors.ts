import { createSelector } from 'reselect';

import { RootState } from '../reducers';
import { State } from './reducer';

const getPeopleState = createSelector(
  (state: RootState) => state.people,
  (s) => s
);

const getPeople = createSelector(getPeopleState, (state: State) => state.people);

export { getPeople, getPeopleState };
