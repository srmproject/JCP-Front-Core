import { takeEvery, all, delay, put } from "redux-saga/effects";
import { actions } from "slices/sample";
import { getType } from 'utils/sliceUtils';

function* getValue(action: string) {
    console.log("Hello Sagas!", action);
    yield delay(1000);
    yield put(actions.setValue({ value: 10 }));
}


export default function* sampleSaga() {
    yield takeEvery(getType(actions, 'getValue'), getValue);
}
