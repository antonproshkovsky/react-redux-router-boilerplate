export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILED = 'AUTH_FAILED';

export const login = (email, pass) => {
  return dispatch => {
    fetch('https://mysterious-reef-29460.herokuapp.com/api/v1/validate', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: email, password: pass})
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        console.log(JSON.stringify(result.status));
        if (result.status === 'ok') {
          dispatchAuthSuccess(dispatch, result.data.id);
        } else if(result.status === 'err') {
          dispatchAuthFailed(dispatch, 'Login or password is wrong');
        } else {
          dispatchAuthFailed(dispatch, 'Server is not available');
        }
      });
  }
};

const dispatchAuthSuccess = (dispatch, profileID) => {
  localStorage.setItem('loggedIn', true);
  localStorage.setItem('profileID', profileID);

  dispatch({
    type: AUTH_SUCCESS
  })
};

const dispatchAuthFailed = (dispatch, errorText) => {
  dispatch({
    type: AUTH_FAILED,
    payload: errorText
  })
};