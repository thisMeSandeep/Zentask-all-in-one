import React from 'react'
import { useContext } from 'react'
import { WeatherContext } from '../../contexts/weather/WeatherContext'

const Timecard = () => {

  const weatherData=useContext(WeatherContext);
  const weatherInfo=weatherData.currentWeather ;

   
   

  return (
    <div className='border  w-full h-full flex flex-col items-center justify-center px-16 py-4 rounded-xl   border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.1)] backdrop-blur-sm  col-span-12  lg:col-span-4  '>
      <h3 className='text-center text-xl font-semibold text-[rgba(255,255,255,0.8)]'>{weatherInfo.city},{weatherInfo.country}</h3>
      <h1 className='text-center mt-5 text-4xl text-[rgba(255,255,255,0.9)] font-bold'>{weatherInfo.time}</h1>
      <p className='text-center text-white'>{weatherInfo.date}</p>
    </div>
  )
}

export default Timecard