import { call, put, takeLatest } from "redux-saga/effects";
import { HomeRenders } from "./types";
import { fetchError, fetchSuccess } from "./actions";
import api from "../../../services/api";

export function* getMagic(action) {
  try {
    const response = yield call(api.get, "/renders");
    yield put(fetchSuccess(response.data));
  } catch (err) {
    yield put(
      fetchError(
        "Error fetching plans",
        err.response ? err.response.data.error.message : err
      )
    );
  }
}

export function errorMessage(action) {
  console.error(action.payload.title, action.payload.message);
}

export const saga = [
  takeLatest(HomeRenders.FETCH_REQUEST, getMagic),
  takeLatest(HomeRenders.FETCH_ERROR, errorMessage)
];
