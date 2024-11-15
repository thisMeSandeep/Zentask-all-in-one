import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  const handleHoursChange = (e) => setHours(e.target.value);
  const handleMinutesChange = (e) => setMinutes(e.target.value);

  const setTimer = () => {
    const totalHours = parseInt(hours, 10) * 3600 || 0;
    const totalMinutes = parseInt(minutes, 10) * 60 || 0;
    const totalTime = totalHours + totalMinutes;
    if (!isNaN(totalTime) && totalTime > 0) {
      setTime(totalTime);
      setHours('');
      setMinutes('');
    }
  };

  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  return (


    <div className=" p-6 neo-card-light dark:bg-[#212121] dark:shadow-custom-dark flex flex-col items-center justify-center h-[200px] w-full  col-span-12 md:col-span-12">

      <div className="text-3xl font-bold mb-2 dark:text-white">{formatTime(time)}</div>


      <div className="flex mb-4 space-x-2">


        <input
          type="text"
          value={hours}
          onChange={handleHoursChange}
          placeholder="Hours"
          className="px-2 py-1 border rounded-full focus:outline-none w-full text-[#7e97b8] bg-[#e0e8ef] shadow-custom-light  dark:bg-dark-bg dark:shadow-custom-dark"
        />

        <input
          type="text"
          value={minutes}
          onChange={handleMinutesChange}
          placeholder="Minutes"
          className="px-2 py-1 border rounded-full text-[#7e97b8] focus:outline-none w-full bg-[#e0e8ef] shadow-custom-light dark:bg-dark-bg dark:shadow-custom-dark"
        />

        <button
          className="button-light dark:bg-dark-bg dark:shadow-custom-dark"
          onClick={setTimer}
        >
          Set
        </button>

      </div>


      <div className="flex space-x-4">

        <button
          className="button-light dark:bg-dark-bg dark:shadow-custom-dark"
          onClick={start}
          disabled={time === 0 || isRunning}
        >
          Start
        </button>


        <button
          className="button-light dark:bg-dark-bg dark:shadow-custom-dark"
          onClick={stop}
          disabled={!isRunning}
        >
          Stop
        </button>


        <button
          className="button-light dark:bg-dark-bg dark:shadow-custom-dark"
          onClick={reset}
        >
          Reset
        </button>


      </div>
    </div>
  );
};

export default Timer;
