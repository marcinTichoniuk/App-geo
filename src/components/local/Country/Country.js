import React from 'react';

const Country = ({ country, className }) => {
  const { name, capital, population, area, region, subregion, currencies, languages } = country;

  const modernPopulation = population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  const modernArea = area ? area.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : null;
  const modernCurrencies = currencies.join(', ');
  const modernLanguages = languages.join(', ');

  return (
    <li className={className}>
      <h3>{name}</h3>
      <p><span>capital:</span> {capital ? capital : 'No data'}</p>
      <p><span>population:</span> {modernPopulation}</p>
      {modernArea ?
        <p><span>area:</span> {modernArea} km<sup>2</sup></p> :
        <p><span>area:</span> No data</p>
      }
      <p><span>region:</span> {region}</p>
      <p><span>subregion:</span> {subregion}</p>
      <p><span>currencies:</span> {modernCurrencies}</p>
      <p><span>languages:</span> {modernLanguages}</p>
    </li>
  );
}

export default Country;