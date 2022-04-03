import { all } from "redux-saga/effects";
import sampleSaga from "sagas/sample";

function* rootSaga() {
  yield all([sampleSaga()]);
}

export default rootSaga;
