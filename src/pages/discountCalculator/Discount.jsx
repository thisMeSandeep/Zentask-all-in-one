import React, { useState } from 'react';

const Discount = () => {

  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [finalPrice, setFinalPrice] = useState(null);


  // function to calculate discount

  const handleCalculate = () => {

    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercentage);

    if (!isNaN(price) && !isNaN(discount)) {
      const discountAmount = (price * discount) / 100;
      const final = price - discountAmount;
      setFinalPrice(final.toFixed(2));
    } else {
      setFinalPrice('Error');
    }
  };


  // function to clear field

  const handleClear = () => {
    setOriginalPrice('');
    setDiscountPercentage('');
    setFinalPrice(null);
  };


  return (

    <div className='w-11/12 sm:w-6/12 mx-auto h-full flex flex-col justify-center items-center '>

      <div className='flex flex-col w-full gap-5  px-5 py-8 rounded-2xl bg-[rgba(110,101,101,0.2)] dark:bg-dark-primary'>

        {/* Input Fields */}

        <input
          type="text"
          placeholder="Original Price"
          value={originalPrice}
          onChange={(e) => setOriginalPrice(e.target.value)}
          className='w-full text-2xl text-primary text-right px-2 py-2 rounded-md outline-none border shadow-md dark:bg-transparent dark:border-[rgba(255,255,255,0.5)] dark:text-dark-text-secondary'
        />
        <input
          type="text"
          placeholder="Discount Percentage"
          value={discountPercentage}
          onChange={(e) => setDiscountPercentage(e.target.value)}
          className='w-full text-2xl text-primary text-right px-2 py-2 rounded-md outline-none border shadow-md dark:bg-transparent dark:border-[rgba(255,255,255,0.5)] dark:text-dark-text-secondary'
        />

        {/* Output Field */}

        <input
          type="text"
          readOnly
          value={
            finalPrice === null
              ? ''
              : finalPrice === 'Error'
                ? 'Error! Please enter valid values'
                : `Final Price: Rs${finalPrice}`
          }
          className='w-full text-2xl text-primary text-right px-2 py-3 rounded-md outline-none border shadow-md dark:bg-transparent dark:border-[rgba(255,255,255,0.5)] dark:text-dark-text-secondary'
        />

        {/* Buttons */}

        <div className='w-full flex items-center justify-center gap-5 '>
          <button
            onClick={handleCalculate}
            className='text-secondary shadow-md bg-sidebar-bg text-white  rounded-full text-xl px-4 py-1 dark:bg-transparent dark:border dark:border-[rgba(255,255,255,0.5)] dark:text-dark-text-secondary '
          >
            Calculate
          </button>

          <button
            onClick={handleClear}
            className='text-secondary shadow-md bg-sidebar-bg text-white  rounded-full text-xl px-10 py-1 dark:border dark:bg-transparent dark:border-[rgba(255,255,255,0.5)] dark:text-dark-text-secondary '
          >
            Clear
          </button>

        </div>
      </div>
    </div>
  );
};

export default Discount;
