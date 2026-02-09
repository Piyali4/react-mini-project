import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchbox.css';
import { useState } from 'react';
export default function SearchBox({ updateWeatherInfo }) {
    let [city, setCity] = useState("");
    let[error, setError] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
    const API_KEY = "781fac9e9fc5db4e29d6614f0f8d8187"
    

    let getWeatherInfo = async (updateWeatherInfo) => {
        try{
            let response = await fetch(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`);
            let data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.message || "City not found");
            }
            
            let weatherInfo = {
              city: city,
              temp: data.main.temp,
              humidity: data.main.humidity,
              pressure: data.main.pressure,
              temp_min: data.main.temp_min,
              temp_max: data.main.temp_max,
              weather: data.weather[0].main,
              wind: data.wind.speed,
              feels_like: data.main.feels_like,
              weather_desc: data.weather[0].description,
              weather_icon: data.weather[0].icon,
          }
          console.log(weatherInfo);
          setError(""); // Clear any previous errors
          updateWeatherInfo(weatherInfo);
        }catch(error){
            setError("city not found");
            updateWeatherInfo(null);
        }
    }   
    let handleChange = (evt) => {
        setCity(evt.target.value);
    }
    let handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
       await getWeatherInfo(updateWeatherInfo);
    //    return weatherInfo;
    }
       
    return (
        <div className="search-box">
         {/* <h3>Search for the weather in your city</h3> */}
         <form onSubmit={handleSubmit}>
         <TextField id="City" label="Enter City" variant="outlined" required value={city} onChange={handleChange}/>
         <br /><br />
         <Button variant="contained" type="submit">Search</Button>
         {error && <p style={{color: 'red', marginTop: '10px'}}>{error}</p>}
         </form>
        </div>
    )
}