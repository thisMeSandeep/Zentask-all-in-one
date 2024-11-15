import { createContext, useEffect, useState } from "react";

const WeatherContext = createContext();

export default function WeatherProvider({ children }) {
    const [city, setCity] = useState('Delhi');
    const [location, setLocation] = useState({ lat: '', lon: '' });

    const [currentWeather, setCurrentWeather] = useState({
        date: '',
        time: '',
        temp: '',
        tempmin: '',
        tempmax: '',
        feels_like: '',
        humidity: '',
        pressure: '',
        lat: '',
        lon: '',
        city: '',
        country: '',
        sunrise: '',
        sunset: '',
        description: '',
        wind_speed: '',
    });

    const apiKey = '2f13107f2b2e0babe449882ed43b4ab4';

    const fetchWeatherByCity = async (city) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            updateWeatherState(data);
        } catch (error) {
            console.error('Error in fetching data', error);
        }
    };

    const fetchWeatherByLocation = async (lat, lon) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            updateWeatherState(data);
        } catch (error) {
            console.error('Error in fetching data', error);
        }
    };

    const updateWeatherState = (data) => {
        const now = new Date();
        setCurrentWeather({
            date: now.toLocaleDateString(),
            time: now.toLocaleTimeString(),
            temp: (data.main.temp).toFixed(2),
            tempmin: (data.main.temp_min).toFixed(2),
            tempmax: (data.main.temp_max).toFixed(2),
            feels_like: (data.main.feels_like).toFixed(2),
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            lat: data.coord.lat,
            lon: data.coord.lon,
            city: data.name,
            country: data.sys.country,
            sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
            sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
            description: data.weather[0].description,
            wind_speed: data.wind.speed,
        });
    };

    useEffect(() => {
        if (city) {
            fetchWeatherByCity(city);
            setLocation({ lat: '', lon: '' })
        }
    }, [city]);

    useEffect(() => {
        if (location.lat && location.lon) {
            fetchWeatherByLocation(location.lat, location.lon);
        }
    }, [location]);

    useEffect(() => {
        const fetchGeolocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        setLocation({ lat: latitude, lon: longitude });
                    },
                    (error) => {
                        console.error('Error getting geolocation', error);
                    }
                );
            } else {
                console.error('Geolocation is not supported by this browser.');
            }
        };

        fetchGeolocation();
    }, []);

    return (
        <WeatherContext.Provider value={{ city, setCity, currentWeather, location, setLocation }}>
            {children}
        </WeatherContext.Provider>
    );
}

export { WeatherContext };
