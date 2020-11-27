import { createSelector } from 'reselect';

import { RootState } from '../reducers';

const getFilmState = createSelector(
  (state: RootState) => state.films,
  (s) => s
);

export default getFilmState;
