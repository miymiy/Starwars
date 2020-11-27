import { filmModelToFilm } from 'data/mappers';
import { FilmModel } from 'data/models';
import request from 'data/request';
import { all, call, fork, put, spawn, take } from 'redux-saga/effects';
import { pageActions } from 'stores/page/actions';

import { filmActions, FilmActionTypes } from './actions';

function* fetchFilms(urls: string[]) {
  try {
    const result: FilmModel[] = yield all(urls.map((url) => call(request, url)));
    yield put(
      filmActions.set({
        films: result.map(filmModelToFilm),
      })
    );
  } catch (e) {
    yield put(pageActions.setError('Something went wrong'));
  }
}

function* watchFetch() {
  while (true) {
    const { payload } = yield take(FilmActionTypes.Fetch);
    yield spawn(fetchFilms, payload.urls);
  }
}

export default [fork(watchFetch)];
