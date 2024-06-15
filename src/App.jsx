import Weather from './components/Weather';
import Form from './components/Form';
import { useState, useEffect, useRef } from 'react';


function App() {
  const [city, setCity] = useState(null);
  const [error, setError] = useState(true);
  const [unit, setUnit] = useState("degree");
  const timeout = useRef(null)
  const fetchData = async (searchQuery) => {
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

  const debounceSearch = (searchQuery) => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      fetchData(searchQuery);
    }, 700)
  }

  useEffect(() => {
    fetchData('mumbai');
  }, []);

  return (
    <div className=" w-full sm:w-2/3 h-screen sm:h-4/5 flex flex-col mt-0 justify-start sm:justify-center text-center text-whitesmoke bg-slate-700 bg-opacity-25 shadow-lg backdrop-blur-4 border border-white border-opacity-20 rounded-lg p-4
    ">
      <Form debounceSearch={debounceSearch} />
      <Weather setUnit={setUnit} error={error} city={city} unit={unit} />
    </div>
  );
}

export default App;
