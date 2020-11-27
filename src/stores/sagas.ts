import { all } from 'redux-saga/effects';

import filmSagas from './films/sagas';
import peopleSagas from './people/sagas';

export default function* rootSaga() {
  yield all([...peopleSagas, ...filmSagas]);
}
