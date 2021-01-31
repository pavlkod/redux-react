import React from "react";
import { render } from "react-dom";

import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { rootReducer } from "./redux/rootReducer";
import { forbiddenWorsMiddleware } from "./redux/middleware";

import App from "./App";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, forbiddenWorsMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
