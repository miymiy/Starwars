import { filmActions, FilmActionTypes } from './actions';

test('film actions', () => {
  const urls = ['http://test'];
  const action = filmActions.fetch({ urls });
  expect(action).toEqual({
    type: FilmActionTypes.Fetch,
    payload: { urls },
  });
});
