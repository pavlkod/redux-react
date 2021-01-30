import { CREATE_POST } from "./types";

export const createPost = data => ({ type: CREATE_POST, payload: data });
