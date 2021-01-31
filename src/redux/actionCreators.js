import { CREATE_POST, FETCH_POSTS, HIDE_ERROR, HIDE_LOADER, SHOW_ERROR, SHOW_LOADER } from "./types";

export const createPost = data => ({ type: CREATE_POST, payload: data });
export const fetchPosts = () => async dispatch => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`);
    const json = await response.json();

    dispatch({
      type: FETCH_POSTS,
      payload: json,
    });
  } catch (e) {
    dispatch(showError(e.message));
  } finally {
    dispatch(hideLoader());
  }
};

export const showLoader = () => ({ type: SHOW_LOADER, payload: true });
export const hideLoader = () => ({ type: HIDE_LOADER, payload: false });

export const showError = (data, ms = 2000) => dispatch => {
  dispatch({ type: SHOW_ERROR, payload: data });
  setTimeout(() => {
    dispatch(hideError());
  }, ms);
};
export const hideError = () => ({ type: HIDE_ERROR });
