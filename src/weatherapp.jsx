import SearchBox from './searchbox';
import InfoBox from './infobox';
import { useState } from 'react';


export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "kolkata",
        temp: 20,
        humidity: 50,
        pressure: 1000,
        temp_min: 10,
        temp_max: 30,
        wind: 10,
        feels_like: 20,
        weather: "Haze",
    });
    let updateWeatherInfo = (weatherInfo) => {
        setWeatherInfo(weatherInfo);
    }
    return (
        <div className="weather-app" style={{textAlign: "center"}}>
            <h2>Weather App</h2>
            <SearchBox updateWeatherInfo={updateWeatherInfo} />
            <InfoBox weatherInfo={weatherInfo} />
        </div>
    );
}