import request from 'data/request';
import uris from 'data/uris';
import { call, put, spawn, take } from 'redux-saga/effects';

import { peopleActions, PeopleActionTypes } from './actions';
import { loadPeople, watchInit } from './sagas';

jest.mock('data/request');

test('loadPeople', () => {
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

test('watchInit', () => {
  const gen = watchInit();
  expect(gen.next().value).toEqual(take(PeopleActionTypes.Init));
  expect(gen.next().value).toEqual(spawn(loadPeople, uris.initPeople));
});
