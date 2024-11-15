import React, { useState, useEffect, useContext, useRef } from 'react';
import { WeatherContext } from '../../contexts/weather/WeatherContext';
import { Chart } from 'chart.js/auto';

const Forecast = () => {


    const { city, location } = useContext(WeatherContext);
    const [dates, setDates] = useState([]);
    const [temperatures, setTemperatures] = useState([]);


    const chartRef = useRef(null);
    const apikey = '2f13107f2b2e0babe449882ed43b4ab4';



    // fetching data by city 

    async function forecastByCity(city) {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=metric`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            processForecastData(data.list);
        } catch (error) {
            console.error('Error in fetching data', error);
        }
    }

    // fetching data by location


    async function forecastByLocation(lat, lon) {
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            processForecastData(data.list);
        } catch (error) {
            console.error('Error in fetching data', error);
        }
    }

    // processing fetched data


    function processForecastData(list) {
        const dailyData = {};

        list.forEach(entry => {
            const [date, time] = entry.dt_txt.split(' '); // Extract date and time parts
            const temp = entry.main.temp;

            // Only consider entries at 12:00 PM
            if (time === '12:00:00') {
                dailyData[date] = temp;
            }
        });

        const processedDates = Object.keys(dailyData);
        const processedTemperatures = processedDates.map(date => dailyData[date]);

        setDates(processedDates);
        setTemperatures(processedTemperatures);
    }


    useEffect(() => {
        if (location.lat && location.lon) {
            forecastByLocation(location.lat, location.lon);
        } else {
            forecastByCity(city);
        }
    }, [city, location]);



    // charts js code 

    useEffect(() => {
        
        if (chartRef.current && dates.length > 0 && temperatures.length > 0) {

            const chartData = {
                labels: dates,
                datasets: [{
                    label: '5-Day Forecast',
                    data: temperatures,
                    fill: false,
                    borderColor: '#F96332',
                    tension: 0.1
                }]
            };
    
            const chartConfig = {
                type: 'line',
                data: chartData,
                options: {
                    scales: {
                        x: {
                            ticks: {
                                color: 'rgba(255,255,255,0.8)' 
                            },
                            title: {
                                display: true,
                                text: 'Date',
                                color: 'white' 
                            }
                        },
                        y: {
                            ticks: {
                                color: 'rgba(255,255,255,0.8)' 
                            },
                            title: {
                                display: true,
                                text: 'Temperature',
                                color: 'white' 
                            }
                        }
                    }
                }
            };
    
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }
    
            chartRef.current.chart = new Chart(chartRef.current, chartConfig);
        }
    }, [dates, temperatures]);
    



    return (
        <div className='border w-full h-full flex flex-col items-center justify-center px-1 py-1 rounded-xl  border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.1)] backdrop-blur-sm col-span-12 lg:col-span-5'>
            <h2 className='text-sm mb-5 text-[rgba(255,255,255,0.8)]'>5-Day Temperature Forecast</h2>
            <canvas ref={chartRef} className='text-white'></canvas>
        </div>
    );
}

export default Forecast;
