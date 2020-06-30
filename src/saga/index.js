import { put, takeEvery } from 'redux-saga/effects'
import { gf } from '../configs/Api';
import { REQUEST_IMAGE, RECEIVE_IMAGE, PUSH_IMAGE, REQUEST_IMAGE_FAILED } from '../actions/index';

function* fetchUser() {
  try {
    const result = yield fetch(gf)
      .then(response => response.json());
    yield put({ type: RECEIVE_IMAGE, data: result.data });
    yield put({ type: PUSH_IMAGE });
  } catch (e) {
    yield put({ type: REQUEST_IMAGE_FAILED, message: e.message });
  }
}

function* mySaga() {
  yield takeEvery(REQUEST_IMAGE, fetchUser);
}

export default mySaga;