import React from 'react';

import Country from '../Country/CountryStyled';

const CountryList = ({ inputCountries, className }) => {
  const countries = inputCountries.map(country => (
    <Country key={country.name} country={country} />
  ))
  return (
    <div className={className}>
      <ol>
        {countries}
      </ol>
    </div>
  );
}

export default CountryList;