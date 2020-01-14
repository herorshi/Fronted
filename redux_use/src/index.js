import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import commentReducer from "./commentReducer";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
const store = createStore(commentReducer);
console.log(store);
store.subscribe(() => {
      console.log("Update Stroe:",store.getState())
});
ReactDOM.render(
  <Provider store={store}>
    <App   {...store}  />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
