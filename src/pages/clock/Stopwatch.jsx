import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (milliseconds) => {
    const ms = (`00${milliseconds % 1000}`).slice(-3);
    const seconds = (`0${Math.floor((milliseconds / 1000) % 60)}`).slice(-2);
    const minutes = (`0${Math.floor((milliseconds / 60000) % 60)}`).slice(-2);
    const hours = (`0${Math.floor(milliseconds / 3600000)}`).slice(-2);
    return `${hours}:${minutes}:${seconds}.${ms}`;
  };

  return (

    <div className=" p-6 neo-card-light dark:bg-[#212121] dark:shadow-custom-dark flex flex-col items-center justify-center  h-[200px] w-full col-span-12 md:col-span-6">

      <div className="text-3xl font-bold mb-2 dark:text-white">{formatTime(time)}</div>

      <div className="flex space-x-4">

        <button
          className="button-light dark:bg-dark-bg dark:shadow-custom-dark"
          onClick={start}
        >
          Start
        </button>


        <button
          className="button-light dark:bg-dark-bg dark:shadow-custom-dark"
          onClick={stop}
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

export default Stopwatch;
