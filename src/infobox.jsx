import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './infobox.css';
export default function InfoBox({weatherInfo}){
    const INIT_URL=
    "https://images.unsplash.com/photo-1706696951930-6bc6258767b0?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    if (!weatherInfo) {
        return (
            <div className="info-box">
                <div className="info-box-content">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                            <Typography variant="h6" color="error">
                                No weather data available
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }
    
    // let weatherInfo = {
    //     city: "kolkata",
    //     temp: 20,
    //     humidity: 50,
    //     pressure: 1000,
    //     temp_min: 10,
    //     temp_max: 30,
    //     wind: 10,
    //     feels_like: 20,
    //     weather: "Haze",
    //     // weather: "Sunny",
    // }
    // console.log(weatherInfo);
    return (
        <div className="info-box">
            {/* <h1>Weather Information-{weatherInfo.weather}</h1> */}
        <div className="info-box-content">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {weatherInfo.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
            <p>Temperature: {weatherInfo.temp}°C</p>
            <p>Humidity: {weatherInfo.humidity}%</p>
            <p>Pressure: {weatherInfo.pressure} hPa</p>
            <p>Temp Min: {weatherInfo.temp_min}°C</p>
            <p>Temp Max: {weatherInfo.temp_max}°C</p>
            <p>Wind: {weatherInfo.wind} km/h</p>
            <p>Feels Like: {weatherInfo.feels_like}°C</p>
            <p>Weather: {weatherInfo.weather}</p>
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    </div>
        </div>
    );
}