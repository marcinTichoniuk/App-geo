import * as actions from './actions';

export const fetchCountries = () => {
  return dispatch => {
    dispatch(actions.fetchPending());
    fetch("https://restcountries-v1.p.rapidapi.com/all", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
        "x-rapidapi-key": "e63396a0e8msh7cc1f811e4eabf8p17bfcejsnc5e6baf0d8c6"
      }
    })
      .then(response => {
        if (!response.ok) {
          throw (response.status)
        } else {
          return response.json()
        }
      })
      .then(data => {
        setTimeout(() => dispatch(actions.fetchSuccess(data)), 300);
        return data;
      })
      .catch(error => dispatch(actions.fetchError(error)))
  }
}
