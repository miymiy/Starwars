import { createSelector } from 'reselect';

import { RootState } from '../reducers';
import { State } from './reducer';

const getPeopleState = (state: RootState) => state.people;

const getPeople = createSelector(getPeopleState, (state: State) => state.people);

export { getPeople, getPeopleState };
