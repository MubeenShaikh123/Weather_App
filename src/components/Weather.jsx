import { useEffect, useState } from "react"

export default function Weather(props) {
    const city = props.city
    const error = props.error
    const setUnit = props.setUnit
    const unit = props.unit
    const [temp, setTemp] = useState('')
    const [weathericon, setWeathericon] = useState('wi-day-sunny')
    const setWeatherIcon = (id) => {
        switch (true) {
            case ((id >= 200) && (id <= 232)):
                setWeathericon('wi-day-thunderstorm')
                break;
            case ((id >= 300) && (id <= 321)):
                setWeathericon('wi-day-sleet')
                break;
            case ((id >= 500) && (id <= 531)):
                setWeathericon('wi-storm-showers')
                break;
            case ((id >= 600) && (id <= 622)):
                setWeathericon('wi-snow')
                break;
            case ((id >= 701) && (id <= 781)):
                setWeathericon('wi-fog')
                break;
            case id === 800:
                setWeathericon('wi-day-sunny')
                break;
            case ((id >= 801) && (id <= 804)):
                setWeathericon('wi-day-fog')
                break;
            default:
                setWeathericon("wi-day-sunny")
        }
    }

    useEffect(() => {
        if (city) {
            if (unit == "degree") {
                setTemp(`${(city.main.temp - 273.15).toFixed(1)}°C`);
                setWeatherIcon(city.weather[0].id)
            }
            else {
                setTemp((city.main.temp).toFixed(1));
            }
        }

    }, [unit, city])

    return (
        error ? (
            <div className="flex justify-center">
              <div className="card_div min-h-[400px] flex flex-col items-center border-none">
                <h1 className="mt-5 text-2xl text-red-500">No Data Found</h1>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center text-2xl w-full">
              <div className="w-full sm:w-2/3  flex flex-col items-center border-none">
                <h1 className="py-2 text-5xl">{city.name}</h1>
                <h1 className="pt-4 text-7xl">
                  <i className={`wi ${weathericon} display-1`}></i>
                </h1>
                <h3 className="py-2 text-3xl">{city.weather[0].main}</h3>
                <div className="flex pt-3 w-4/5 justify-evenly">
                  <div className="checkbox">
                    <input
                      type="radio"
                      name="unit"
                      id="degree"
                      value="degree"
                      defaultChecked
                      onChange={(e) => { setUnit(e.target.value); }}
                    />
                    <label htmlFor="degree">Deg</label>
                  </div>
                  <div className="checkbox">
                    <input
                      type="radio"
                      name="unit"
                      id="kelvin"
                      value="kelvin"
                      onChange={(e) => { setUnit(e.target.value); }}
                    />
                    <label htmlFor="kelvin">Kel</label>
                  </div>
                </div>
                <div className="temp pt-4">
                  <h3 className="">Temp: {temp}</h3>
                </div>
                <div className="container mx-auto">
                  <div className="flex flex-col w-full md:flex-row justify-evenly pt-3">
                    <div className="w-full md:w-1/2 pb-3 md:pb-0">
                      <h4 className="">Wind Speed: {`${city.wind.speed} m/s`}</h4>
                    </div>
                    <div className="w-full md:w-1/2 pb-3 md:pb-0">
                      <h4 className="">Humidity: {`${city.main.humidity} %`}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
    )
}