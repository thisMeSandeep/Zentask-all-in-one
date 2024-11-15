import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const WeatherMap = () => {



  const [layer, setLayer] = useState('temp_new');
  const [zoom, setZoom] = useState(2);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  // Map Tile URL

  const apiKey = '2f13107f2b2e0babe449882ed43b4ab4'; 
  const tileUrl = `https://tile.openweathermap.org/map/${layer}/{z}/{x}/{y}.png?appid=${apiKey}`;

  return (

    <div className='min-w-[200px] h-[350px] border px-2  border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.1)] backdrop-blur-sm rounded-xl col-span-12 lg:col-span-7'>

      <div className='flex items-center gap-5 px-2 py-1'>

        <label className='flex text-white'>
          Map:
          <select value={layer} onChange={(e) => setLayer(e.target.value)} className='outline-none bg-transparent  text-white'>
            <option value="temp_new" className='text-black' >Temperature</option>
            <option value="clouds_new" className='text-black'>Clouds</option>
            <option value="precipitation_new" className='text-black'>Precipitation</option>
            <option value="pressure_new" className='text-black'>Pressure</option>
            <option value="wind_new" className='text-black'>Wind</option>
            <option value="snow" className='text-black'>Snow</option>
          </select>
        </label>

     



      </div>

      <MapContainer
        center={[latitude, longitude]}
        zoom={zoom}
        style={{ height: '300px', width: '100%' }}
      >
        <TileLayer url={tileUrl} />

      </MapContainer>

    </div>
  );
}

export default WeatherMap;
