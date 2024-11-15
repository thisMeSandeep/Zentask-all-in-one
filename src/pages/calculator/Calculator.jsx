import React, { useState } from 'react';

const numArray = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'];

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('0');


  // function to calculate result

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '=') {
      try {
        const evalResult = Function('"use strict";return (' + input + ')')();
        setResult(evalResult);
        setInput(evalResult.toString());
      } catch (error) {
        console.log('Error evaluating input:', error);
        setResult('Wrong input !');
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (

    <div className='w-11/12 sm:w-9/12 mx-auto h-full flex flex-col justify-center items-center gap-5'>

      <div className='w-full  p-5 rounded-2xl bg-[rgba(110,101,101,0.2)] dark:bg-dark-primary'>

        {/* Output field */}

        <input
          type="text"
          readOnly
          value={input || result}
          className='w-full text-2xl text-primary text-right px-2 py-4 rounded-md outline-none border shadow-sm dark:bg-transparent dark:border-[rgba(255,255,255,0.5)] dark:text-dark-text-secondary'
        />


        {/* Keyboard */}

        <div className='w-full grid grid-cols-4 place-items-center gap-8 mt-4'>
          {numArray.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className='text-secondary shadow-inner hover:bg-orange-400 hover:text-white border rounded-full text-xl py-2 px-5 bg-white dark:bg-transparent dark:border-[rgba(255,255,255,0.5)] dark:text-dark-text-secondary'
            >
              {item}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Calculator;
