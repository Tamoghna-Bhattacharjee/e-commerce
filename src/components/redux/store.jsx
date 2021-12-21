import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import root_reducer from "./root_reducer";

const middlewares = [logger];

const store = createStore(root_reducer, applyMiddleware(...middlewares));

export default store;