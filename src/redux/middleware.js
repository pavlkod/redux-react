import { showError } from "./actionCreators";
import { CREATE_POST } from "./types";

const forbidden = ["php", "spam", "fuck"];

export const forbiddenWorsMiddleware = ({ dispatch }) => next => action => {
  console.log(dispatch, next, action);
  if (action.type === CREATE_POST) {
    const found = forbidden.filter(word => action.payload.title.includes(word));
    if (found.length) {
      return dispatch(showError("Используется стоп-слово"));
    }
  }
  return next(action);
};
