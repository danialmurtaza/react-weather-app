import React, { useState } from 'react';
import './App.css';
import axios from 'axios';



const WeatherApp = () => {

  const [data, setData] = useState({});
  const [city, setCity] = useState('');
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e1e67316ac8e7bb241484260ba020af7`;

  const searchcity = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        // console.log(response.data);
      });
      setCity('');
    }
  };

  return (
    <div className='weather-app'>

      <div className='search'>
        <input type='text' placeholder='Enter city' value={city} onChange={event => setCity(event.target.value)}
        onKeyPress={searchcity} />
      </div>

      <div className='container'>

        <div className='top-portion'>

          <div className='city'>
            <p className='city-name'>{data.name}</p>
          </div>

          <div className='temp'>
            {/* <h1>{data.main.temp}°C</h1> */}
            {data.main ? <h1>{data.main.temp}°C</h1> : null}
          </div>

          <div className='weather-description'>
            {/* <p>{data.weather[0].main}</p> */}
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>

        </div>

        {data.name !== undefined && 
         <div className='bottom-portion'>
          
         <div className='feels-like'>
           {/* <p className='bold'>{data.main.feels_like}°C</p> */}
           {data.main ? <p className='bold'>{data.main.feels_like}°C</p> : null}
           <p className='bottom-portion-text'>Feels Like</p>
         </div>

         <div className='humidity'>
           {/* <p className='bold'>{data.main.humidity}%</p> */}
           {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
           <p className='bottom-portion-text'>Humidity</p>
         </div>

         <div className='wind'>
           {/* <p className='bold'>{data.wind.speed} KM/H</p> */}
           {data.wind ? <p className='bold'>{data.wind.speed} MPH</p> : null}
           <p className='bottom-portion-text'>Wind Speed</p>
         </div>

       </div>
       }
       

      </div>

    </div>
  );
}

export default WeatherApp;