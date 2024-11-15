import React from 'react'
import sky1 from "../../assets/sky1.jpg"
import Search from './Search';
import Timecard from './Timecard';
import WeatherData from './WeatherData';
import Forcast from './Forcast';
import WeatherMap from './WeatherMap';
import { useEffect, useRef, useContext } from 'react';
import { WeatherContext } from '../../contexts/weather/WeatherContext';


const Weather = () => {

  const { city, location } = useContext(WeatherContext);

  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.classList.remove('animate-weather-background');
      void elementRef.current.offsetWidth;

      setTimeout(() => {
        if (elementRef.current) {
          elementRef.current.classList.add('animate-weather-background');
        }
      }, 0);
    }
  }, [city, location]);




  return (

    <div className='w-full p-5 mx-auto h-full  font-poppins bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${sky1})` }} ref={elementRef}>

      <Search />

      <div className="mt-4 py-4 grid grid-cols-12  gap-6">
        <Timecard />
        <WeatherData />
        <Forcast />
        <WeatherMap />
      </div>
    </div>
  )
}

export default Weather