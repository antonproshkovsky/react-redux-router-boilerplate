import { combineReducers } from 'redux'
import {loginReducer} from "./login";
import {profileReducer} from "./profile"

export const rootReducer = combineReducers({
  login: loginReducer,
  profile: profileReducer
});