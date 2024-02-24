import Weather from './components/Weather';
import Form from './components/Form';
import { useState,useEffect } from 'react';


function App() {

  const [search, setSearch] = useState('Mumbai');
  const [city, setCity] = useState(null);
  const [error, setError] = useState(true);
  const [unit, setUnit] = useState("degree");

  useEffect(() => {
    const API_key = 'bd2864ad83d2c791d0044186dcf6a292';
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setError(null)
        setCity(data)

      } catch (error) {
        setError(error)
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [search]);

  return (
    <div className="main container-fluid">
      <Form setSearch={setSearch}></Form>
      <Weather setUnit={setUnit} error={error} city={city} unit={unit}></Weather>
    </div>
  );
}

export default App;
