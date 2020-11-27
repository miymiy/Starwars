import { personModelToPerson } from 'data/mappers';
import { PeopleResponse } from 'data/models';
import request from 'data/request';
import uris from 'data/uris';
import { call, fork, put, spawn, take } from 'redux-saga/effects';
import { pageActions } from 'stores/page/actions';

import { peopleActions, PeopleActionTypes } from './actions';

export function* loadPeople(url: string) {
  try {
    const res: PeopleResponse = yield call(request, url);
    yield put(
      peopleActions.set({
        nextPage: res.next,
        prevPage: res.previous,
        people: res.results.map(personModelToPerson),
      })
    );
  } catch (e) {
    yield put(pageActions.setError('Something went wrong'));
  }
}

function* watchFetch() {
  while (true) {
    const { payload } = yield take(PeopleActionTypes.Fetch);
    yield spawn(loadPeople, payload.url);
  }
}

export function* watchInit() {
  while (true) {
    yield take(PeopleActionTypes.Init);
    yield spawn(loadPeople, uris.initPeople);
  }
}

export default [fork(watchInit), fork(watchFetch)];
