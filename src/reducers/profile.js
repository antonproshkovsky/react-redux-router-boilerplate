import {GET_PROFILE_DATA_FAILED, GET_PROFILE_DATA_SUCCESS} from "../actions/profile";

const initialState = {
  data: {},
  error: ''
};
export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_DATA_SUCCESS:
      return {...state, data: action.payload, error: ''}
    case GET_PROFILE_DATA_FAILED:
      return {...state, data: {}, error: action.payload}
    default:
      return state;
  }
};