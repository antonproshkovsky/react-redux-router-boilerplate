export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILED = 'AUTH_FAILED';

export const login = (email,pass) => {
  return dispatch => {
    fetch('/', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: {
        "email": email,
        "password": pass
      }
    })
      .then(function(response) {
      return response.json();
    })
      .then(function(result) {
      console.log(JSON.stringify(result));
    });
  }
};

// const dispatchAuthSuccess = () => {
//
// }
//
// const dispatchAuthFailed = () => {
//
// }