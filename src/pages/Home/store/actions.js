import * as types from './types';

export const fetchPending = () => ({
  type: types.FETCH_COUNTRY_PENDING
});

export const fetchSuccess = countries => ({
  type: types.FETCH_COUNTRY_SUCCESS, countries
});

export const fetchError = error => ({
  type: types.FETCH_COUNTRY_ERROR, error
});

export const filteredCountries = input => ({
  type: types.FILTERED_COUNTRIES, input
});

export const resetCountries = inputValue => ({
  type: types.RESET_FILTERED_COUNTRIES, inputValue
})