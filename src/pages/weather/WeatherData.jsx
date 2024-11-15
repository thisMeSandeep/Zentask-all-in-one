import React from 'react'
import { FiSunrise, FiSunset } from "react-icons/fi";
import { MdSunny } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa6";
import { WiBarometer } from "react-icons/wi";
import { useContext } from 'react'
import { WeatherContext } from '../../contexts/weather/WeatherContext'
import cloudy from '../../assets/cloudy.png'

const WeatherData = () => {

    const weatherData = useContext(WeatherContext);
    const weatherInfo = weatherData.currentWeather;

    return (

        <div className='grid grid-cols-12   gap-5 w-full h-full col-span-12 lg:col-span-8 place-items-center border  px-4 py-2 rounded-xl  border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.1)] backdrop-blur-sm '>


            {/* first grid child - temperature */}

            <div className='col-span-6  w-full h-full flex flex-col justify-center items-center'>

                <h1 className='text-4xl md:text-5xl text-white font-bold '>{weatherInfo.temp}°C</h1>

                <p className='text-sm flex items-center gap- text-[rgba(255,255,255,0.8)]'>Feels like: <span className='text-xl font-semibold'>{weatherInfo.feels_like}°C</span></p>

                <div className='flex items-center gap-1 md:gap-5'>

                    <div className=' mt-5 flex gap-2 items-center '>
                        <FiSunrise className='text-2xl md:text-4xl text-[rgba(255,255,255,0.7)]' />
                        <div>
                            <p className='text-sm font-semibold text-white'>Sunrise</p>
                            <p className='text-[12px] text-[rgba(255,255,255,0.7)]'>{weatherInfo.sunrise}</p>
                        </div>
                    </div>

                    <div className='flex gap-2 items-center mt-4'>
                        <FiSunset className='text-2xl md:text-4xl text-[rgba(255,255,255,0.7)]' />
                        <div>
                            <p className='text-sm font-semibold text-white'>Sunset</p>
                            <p className='text-[12px] text-[rgba(255,255,255,0.7)]'>{weatherInfo.sunset}</p>
                        </div>
                    </div>

                </div>

            </div>

            {/* second grid child  */}



            <div className='flex flex-col items-center justify-center col-span-6  w-full h-full'>

                <img src={cloudy} alt="icon" className='w-[120px] h-[120px]  object-contain' />

                <p className='mt-4 text-xl capitalize font-semibold text-white'>{weatherInfo.description}</p>

            </div>


            <div className='flex items-center gap-5 col-span-12 text-[rgba(255,255,255,0.7)]'>
                <p>Min :{weatherInfo.tempmin}°C</p>
                <p>Max :{weatherInfo.tempmax}°C</p>
            </div>


            {/* third grid child */}

            <div className='flex  items-center justify-center gap-4   col-span-12  w-full h-full'>

                <div className=' flex flex-col items-center flex-1 '>
                    <WiHumidity className=' text-4xl md:text-5xl text-blue-800 ' />
                    <p className='font-semibold text-[rgba(255,255,255,0.7)]'>{weatherInfo.humidity}</p>
                    <p className='text-sm font-[500] text-white'>Humidity</p>
                </div>


                <div className=' flex flex-col items-center justify-center flex-1 '>
                    <FaWind className='text-4xl md:text-5xl text-blue-300' />
                    <p className='font-semibold text-[rgba(255,255,255,0.7)]'>{weatherInfo.wind_speed}m/s</p>
                    <p className='text-sm font-[500] text-nowrap text-white'>Wind speed</p>
                </div>


                <div className=' flex flex-col items-center  flex-1'>
                    <WiBarometer className=' text-4xl md:text-5xl text-white' />
                    <p className='font-semibold text-[rgba(255,255,255,0.7)]'>{weatherInfo.pressure}hPa</p>
                    <p className='text-sm font-[500] text-white'>Pressure</p>
                </div>

            </div>



        </div>


    )
}

export default WeatherData