import { call, put, all, takeLatest } from 'redux-saga/effects';
import { _get } from 'services/requests';

import { searchBooksSuccess } from './actions';

function* getBooks(action) {
  const {
    page,
    filter,
    iData,
    eData,
  } = action.payload;

  const response = yield call(_get,`http://localhost:4000/book?page=${page}&limit=10&filter=${filter}&initialData=${iData}&endData=${eData}`)
  yield put(searchBooksSuccess(response.data));
}

export default all([
  takeLatest('@book/LIST_REQUEST', getBooks),
]);