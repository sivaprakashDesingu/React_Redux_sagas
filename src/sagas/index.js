import { put, takeLatest, all, call,select } from "redux-saga/effects";
import axios from 'axios'


function* fetchNews() {
  const result = yield call(() =>
      axios.get(`http://petstore.swagger.io/v2/pet/findByStatus?status=available`)
    )
  yield put({ type: "GET_LIST_SUCCESS", json: result.data });
}
function * updateNewList(data){
  console.log(data.payload)
  yield put({ type: "GET_LIST_SUCCESS", list: data.payload });
}
function * fetchupateList(){
  const signals = yield select(store => store)
  console.log(signals)
}
function* actionWatcher() {
  yield takeLatest("GET_LIST_REQUEST", fetchNews);
  yield takeLatest("GET_UPDATED_LIST_REQUEST", fetchupateList);
  yield takeLatest("UPDATE_LIST_REQUEST", updateNewList);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}