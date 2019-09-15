import {rootReducer} from "../reducers/index";
import {applyMiddleware, createStore} from "redux";
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk, logger));