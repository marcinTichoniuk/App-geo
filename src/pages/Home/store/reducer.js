import * as types from './types';

const initialState = {
  pending: false,
  countries: [],
  error: null,
  country: '',
  inputCountries: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_COUNTRY_PENDING:
      return {
        ...state,
        pending: true
      }
    case types.FETCH_COUNTRY_SUCCESS:
      return {
        ...state,
        pending: false,
        countries: action.countries
      }
    case types.FETCH_COUNTRY_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    case types.FILTERED_COUNTRIES:
      const inputCountries = state.countries.filter(country => country.name.toLowerCase().includes(action.input.toLowerCase()));
      return {
        ...state,
        inputCountries
      }
    case types.RESET_FILTERED_COUNTRIES:
      let resetCountries = [...state.inputCountries];
      if (action.inputValue === '') {
        resetCountries = [];
      };
      return {
        ...state,
        inputCountries: resetCountries,
      }
    default:
      return state;
  }
}

export default reducer;