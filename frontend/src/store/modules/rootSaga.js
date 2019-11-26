import { all } from 'redux-saga/effects';

import books from './books/sagas';

export default function* rootSaga() {
  return yield all([books]);
}