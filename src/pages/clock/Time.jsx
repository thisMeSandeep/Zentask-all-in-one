import React, { useState, useEffect } from 'react';

const Time = () => {
  const [time, setTime] = useState(new Date());
  const [is24HourFormat, setIs24HourFormat] = useState(true);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    if (!is24HourFormat) {
      hours = hours % 12 || 12;
    }

    return `${hours.toString().padStart(2, '0')}:${minutes}:${seconds} ${!is24HourFormat ? ampm : ''}`;
  };

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const toggleFormat = () => {
    setIs24HourFormat(!is24HourFormat);
  };

  return (


    <div className=" p-6 neo-card-light  dark:bg-[#212121] dark:shadow-custom-dark  flex flex-col items-center justify-center  h-[200px] w-full col-span-12 md:col-span-6">

      <div className="text-3xl font-bold mb-2 dark:text-white">{formatTime(time)}</div>

      <p className="text-xl text-gray-600 dark:text-gray-300">{formatDate(time)}</p>

      <button
        className="mt-4 button-light dark:bg-dark-bg dark:shadow-custom-dark"
        onClick={toggleFormat}
      >
         {is24HourFormat ? '12-hour' : '24-hour'} format
      </button>


    </div>
  );
};

export default Time;
