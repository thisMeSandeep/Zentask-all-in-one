import React, { useContext, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { MdOutlineMyLocation } from "react-icons/md";
import { WeatherContext } from '../../contexts/weather/WeatherContext';

const Search = () => {
    const [cityName, setCityName] = useState('');
    
    const { setCity, setLocation } = useContext(WeatherContext);


    // handle search by icon

    const handleSearch = () => {
        if (cityName.trim() === '') {
            return;
        }
        setCity(cityName);
        setCityName('');
    };


    // handle enter key 

    const handleKeySearch = (e) => {
        if (e.key === 'Enter') {
            if (cityName.trim() === '') {
                return;
            }
            setCity(cityName);
            setCityName('');
        }
    };

    const handleCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ lat: latitude, lon: longitude });
                },
                (error) => {
                    console.error('Error', error);
                }
            );
        } else {
            console.error('provide location');
        }
    };



    return (
        <div className='flex justify-between mt-3'>


            <div className='w-[75%] flex items-center gap-2 border border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.1)] backdrop-blur-sm rounded-full px-2 py-2'>
                <input
                    type="text"
                    value={cityName}
                    placeholder='Search for your city..'
                    className='flex-1 w-full  text-white rounded-full px-2 outline-none bg-transparent placeholder:text-[rgba(255,255,255,0.9)]'
                    onChange={(e) => setCityName(e.target.value)}
                    onKeyDown={handleKeySearch}
                />
                <CiSearch
                    className='text-2xl text-white cursor-pointer'
                    onClick={handleSearch}
                />
            </div>



            <button
                className='flex items-center gap-2 md:bg-[rgba(124,252,0,0.3)] backdrop-blur-sm text-white rounded-full px-2 py-1'
                onClick={handleCurrentLocation}
            >
                <MdOutlineMyLocation className='text-white text-2xl md:text-white ' />
                <span className='hidden md:inline-block'>Current Location</span>
            </button>

        </div>
    );
};

export default Search;
