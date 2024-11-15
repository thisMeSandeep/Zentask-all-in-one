import React, { useState, useEffect } from 'react';

const Currency = () => {
  
  const [inputAmount, setInputAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('INR');
  const [toCurrency, setToCurrency] = useState('USD');
  const [outputAmount, setOutputAmount] = useState('');
  const [currencies, setCurrencies] = useState({});

  const apikey = 'f25ba7a7e9e2f90fb1374c0c';
  const url = `https://v6.exchangerate-api.com/v6/${apikey}/latest/${fromCurrency}`;



  async function currencyExchange() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('There is an error', response.status);
      }
      let data = await response.json();
      setCurrencies(data.conversion_rates);
    } catch (error) {
      console.log('There is an error in fetching data');
    }
  }


  useEffect(() => {
    currencyExchange();
  }, [fromCurrency]);




  function convertCurrency() {
    if (inputAmount && fromCurrency && toCurrency) {
      const rate = currencies[toCurrency];
      const result = (inputAmount * rate).toFixed(2);
      setOutputAmount(result);
    }
  }



  return (

    <div className="w-[95%]  mx-auto h-full font-poppins flex justify-center items-center py-5 ">

      <div className="flex flex-col gap-5 items-center justify-center w-full md:w-[70%] lg:w-[50%] h-fit p-5 rounded-2xl  bg-[rgba(110,101,101,0.2)] dark:bg-dark-primary">


        {/* input  */}

        <p className="w-full text-2xl text-primary dark:text-dark-text-secondary">Enter Amount</p>

        <input
          type="number"
          value={inputAmount}
          onChange={(e) => setInputAmount(e.target.value)}
          className="border w-full px-2 py-2 rounded-2xl outline-none shadow-md text-secondary dark:bg-transparent dark:border-[rgba(255,255,255,0.5)] dark:text-dark-text-secondary"
          placeholder="Amount"
        />

       
        <div className="relative w-full">
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="border w-full px-2 py-2 rounded-2xl outline-none shadow-md text-secondary h-10 dark:bg-transparent dark:border-[rgba(255,255,255,0.5)] dark:text-dark-text-secondary"
          >
            {Object.keys(currencies).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>

        </div>

        <p className="text-center text-2xl dark:text-dark-text-secondary">To</p>


        {/* output */}


        <div className="relative w-full">
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="border w-full px-2 py-2 rounded-2xl outline-none shadow-md text-secondary h-10 dark:bg-transparent dark:border-[rgba(255,255,255,0.5)] dark:text-dark-text-secondary"
          >
            {Object.keys(currencies).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
  
        </div>

        <button
          onClick={convertCurrency}
          className="bg-sidebar-bg text-white p-2 rounded-2xl text-xl font-semibold block w-full cursor-pointer dark:bg-transparent dark:border dark:border-[rgba(255,255,255,0.5)] dark:text-dark-text-secondary"
        >
          Convert
        </button>


        <input
          type="text"
          readOnly
          value={`${outputAmount} ${toCurrency}`}
          className="border w-full px-2 py-2 rounded-2xl outline-none shadow-md text-secondary dark:bg-transparent dark:border-[rgba(255,255,255,0.5)] dark:text-dark-text-secondary"
          placeholder="Converted Amount"
        />

      </div>


    </div>
  );
};

export default Currency;
