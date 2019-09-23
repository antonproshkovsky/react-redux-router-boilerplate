export const GET_PROFILE_DATA_SUCCESS = 'GET_PROFILE_DATA_SUCCESS';
export const GET_PROFILE_DATA_FAILED = 'GET_PROFILE_DATA_FAILED';

export const getProfileData = () => {
  const profileID = localStorage.getItem('profileID');

  return dispatch => {
    fetch(`https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/${profileID}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {

        const web = result.data.social[2];
        result.data.social[2] = result.data.social[0];
        result.data.social[0] = web;

        if(result.status === 'ok') {
          dispatch({
            type: GET_PROFILE_DATA_SUCCESS,
            payload: result.data
          })
        } else if(result.status === 'err'){
          dispatchGetProfileDataFailed(dispatch, 'User not found');
        } else {
          dispatchGetProfileDataFailed(dispatch, 'Server is not available');
        }
      });
  }
};

const dispatchGetProfileDataFailed = (dispatch, errorText) => {
  dispatch({
    type: GET_PROFILE_DATA_FAILED,
    payload: errorText
  })
};