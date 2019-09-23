import {AUTH_FAILED, AUTH_SUCCESS} from "../actions/login";

const initialState = {
  login: false,
  error: ''
};
export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {...state, login: true, error: ''}
      break;
    case AUTH_FAILED:
      return{...state, login:false, error: action.payload}
      break;
    default:
      return state;
  }
};