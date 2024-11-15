import React from 'react';
import Time from './Time';
import Stopwatch from './Stopwatch';
import Timer from './Timer';

const Clock = () => {
  return (
    <div className='w-full p-5 h-full bg-[#e0e0e0] dark:bg-[#212121] grid grid-cols-12 gap-5 place-items-center  '>
      <Time />
      <Stopwatch />
      <Timer />
    </div>
  );
}

export default Clock;
