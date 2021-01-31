import { call, put, takeEvery } from "redux-saga/effects";
import { asyncPosts, hideLoader, showError, showLoader } from "./actionCreators";
import { REQUEST_POSTS } from "./types";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker);
}

function* sagaWorker() {
  try {
    yield put(showLoader());
    const payload = yield call(fetchedPosts);
    yield put(asyncPosts(payload));
  } catch (e) {
    yield put(showError(e.message));
  } finally {
    yield put(hideLoader());
  }
}

async function fetchedPosts() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`);
  return await response.json();
}
