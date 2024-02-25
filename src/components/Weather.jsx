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
            <div className="row ">
                <div className="card_div  ">
                    <h1 className="mt-5">
                        No Data Found
                    </h1>
                </div>
            </div>

        ) :
            <div className="row d-flex justify-content-center  align-items-center ">
                <div className="card_div  ">
                    <h1 className="pt-1">{city.name}</h1>
                    <h1 className="pt-1 ">
                        <i className={`wi ${weathericon} display-1 `}></i>
                    </h1>
                    <h3 className="py-1   ">{city.weather[0].main}</h3>
                    <div className="d-flex pt-2 w-50 justify-content-evenly ">
                        <div className="checkbox ">
                            <input
                                type="radio"
                                name="unit"
                                id="degree"
                                value="degree"
                                defaultChecked
                                onChange={(e) => { setUnit(e.target.value) }}
                            />
                            <label htmlFor="degree">Deg</label>
                        </div>
                        <div className="checkbox ">
                            <input
                                type="radio"
                                name="unit"
                                id="kelvin"
                                value="kelvin"
                                onChange={(e) => { setUnit(e.target.value) }}
                            />
                            <label htmlFor="kelvin">Kel</label>
                        </div>
                    </div>
                    <div className="temp pt-3 ">
                        <h3>Temp : {temp}</h3>
                    </div>
                    <div className="container">
                        <div className="row d-flex justify-content-center    minmax pt-2 ">
                            <div className="col-12 col-md-6">
                                <h4>Wind Speed : {`${city.wind.speed} m/s`}</h4>
                            </div>
                            <div className="col-12 col-md-6">
                                <h4>Humidity : {`${city.main.humidity} %`}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
    )
}
