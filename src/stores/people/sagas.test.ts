import request from 'data/request';
import { call, put } from 'redux-saga/effects';

import { peopleActions } from './actions';
import { loadPeople } from './sagas';

jest.mock('data/request');
jest.mock('redux-saga/effects');

test('loadPeople saga', () => {
  const url = 'http://test';
  const gen = loadPeople(url);
  expect(gen.next().value).toEqual(call(request, url));
  expect(
    gen.next({
      results: [],
    }).value
  ).toEqual(
    put(
      peopleActions.set({
        people: [],
      })
    )
  );
});
