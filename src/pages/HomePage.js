import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { ALL_COUNTRIES } from '../config';
import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import { useNavigate } from 'react-router-dom'

export const HomePage = ({ countries, setCountries }) => {

  const navigate = useNavigate(null);

  const length = countries.length;

  useEffect(() => {
    if (!length) {
      axios.get(ALL_COUNTRIES).then(
        ({ data }) => setCountries(data)
      );
    }
  }, []);

  console.log(length);
  return (
    <div>
      <Controls />
      <List>
        {length == 0 ? <div>Loading...</div> :
          (countries.map((country) => {
            const countryInfo = {
              img: country.flags.png,
              name: country.name,
              info: [
                {
                  title: 'Population',
                  description: country.population.toLocaleString()
                },
                {
                  title: 'Region',
                  description: country.region
                },
                {
                  title: 'Capital',
                  description: country.capital
                }
              ]
            };
            return (
              <Card key={country.name}
                {...countryInfo}
                onClick={() => navigate(`/country/${country.name}`)} />
            );
          }))}

      </List>
    </div>
  );
}