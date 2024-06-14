import Weather from './components/Weather';
import Form from './components/Form';
import { useState,useEffect, useRef } from 'react';


function App() {
  const [city, setCity] = useState(null);
  const [error, setError] = useState(true);
  const [unit, setUnit] = useState("degree");
  const timeout=useRef(null)
  const fetchData = async (searchQuery) => {
    console.log("fetch called")
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${import.meta.env.VITE_API_KEY}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setError(null)
      setCity(data)

    } catch (error) {
      setError(error)
    }
  };

  const debounceSearch=(searchQuery)=>{
    clearTimeout(timeout.current);
    timeout.current=setTimeout(()=>{
      fetchData(searchQuery);
    },1000)
  }

  useEffect(() => {
    fetchData('mumbai');
  },[]);

  return (
    <div className="main container-fluid">
      <Form debounceSearch={debounceSearch}></Form>
      <Weather setUnit={setUnit} error={error} city={city} unit={unit}></Weather>
    </div>
  );
}

export default App;
