import { all } from "redux-saga/effects";
import { saga as HomeSaga } from "./home/sagas";

export default function* rootSaga() {
  return yield all([...HomeSaga]);
}
