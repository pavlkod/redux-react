import { CREATE_POST, FETCH_POSTS, HIDE_LOADER, SHOW_LOADER } from "./types";

export const createPost = data => ({ type: CREATE_POST, payload: data });
export const fetchPosts = () => async dispatch => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`);
  const json = await response.json();

  dispatch(hideLoader());

  dispatch({
    type: FETCH_POSTS,
    payload: json,
  });
};

export const showLoader = () => ({ type: SHOW_LOADER, payload: true });
export const hideLoader = () => ({ type: HIDE_LOADER, payload: false });
