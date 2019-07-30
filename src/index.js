import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Root from "./Router";
import Reducer from "./Reducer/Reducer";
import "./styles.css";
import rootSaga from "./sagas/index";  

export const history = createHistory()
const sagaMiddleware = createSagaMiddleware();
let middleware = applyMiddleware(
    sagaMiddleware,
    routerMiddleware(history)
  )
  

const store = createStore(Reducer, middleware);
sagaMiddleware.run(rootSaga);

const rootElement = document.getElementById("root");
ReactDOM.render(<Root store={store} />, rootElement);
