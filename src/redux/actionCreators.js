import { CREATE_POST, FETCH_POSTS, HIDE_ERROR, HIDE_LOADER, REQUEST_POSTS, SHOW_ERROR, SHOW_LOADER } from "./types";

export const createPost = data => ({ type: CREATE_POST, payload: data });
export const fetchPosts = () => ({
  type: REQUEST_POSTS,
});
export const asyncPosts = data => ({
  type: FETCH_POSTS,
  payload: data,
});

export const showLoader = () => ({ type: SHOW_LOADER, payload: true });
export const hideLoader = () => ({ type: HIDE_LOADER, payload: false });

export const showError = (data, ms = 2000) => dispatch => {
  dispatch({ type: SHOW_ERROR, payload: data });
  setTimeout(() => {
    dispatch(hideError());
  }, ms);
};
export const hideError = () => ({ type: HIDE_ERROR });
