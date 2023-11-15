import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const PopulationChart = () => {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const data = response.data;
        const formattedData = data.map((country) => ({
          name: country.name.common,
          population: country.population || 0,
        }));
        setCountryData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const countries = countryData.map((country) => country.name);
  const populations = countryData.map((country) => country.population);

  const data = {
    labels: countries,
    datasets: [
      {
        label: 'Population',
        data: populations,
        backgroundColor: 'skyblue',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category',
        title: { display: true, text: 'Country' },
      },
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Population' },
      },
    },
  };
  
  

  return (
    <div>
      <h2>Population of Each Country</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default PopulationChart;
