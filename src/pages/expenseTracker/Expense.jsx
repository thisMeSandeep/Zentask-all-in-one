import React from 'react'
import { useState, useEffect } from 'react'
import { MdDeleteOutline } from "react-icons/md";

const Expense = () => {

  const [income, setIncome] = useState('');
  const [incomeSource, setIncomeSource] = useState('');
  const [incomeData, setIncomeData] = useState(() => {
    const savedIncomeData = localStorage.getItem('income');
    return savedIncomeData ? JSON.parse(savedIncomeData) : [];
  });

  // states to manage expenditure

  const [expenditure, setExpenditure] = useState('');
  const [expenditureType, setExpenditureType] = useState('');
  const [expenditureData, setExpenditureData] = useState(() => {
    const savedExpenditureData = localStorage.getItem('expenditure');
    return savedExpenditureData ? JSON.parse(savedExpenditureData) : [];
  });


  // state to add total income and total expenditure

  const [totalIncome, setTotalIncome] = useState('');
  const [totalExpenditure, setTotalExpenditure] = useState('');



  useEffect(() => {
    localStorage.setItem('income', JSON.stringify(incomeData));
  }, [incomeData])

  useEffect(() => {
    localStorage.setItem('expenditure', JSON.stringify(expenditureData));
  }, [expenditureData])



  // function to handle income data

  const handleIncomeData = () => {
    if (income.trim() !== '' && !isNaN(income)) {
      const value = {
        income,
        incomeSource,
      }
      setIncomeData([...incomeData, value]);
      setIncome('');
      setIncomeSource('');
    }
  }

  useEffect(() => console.log(incomeData), [incomeData])


  // handle income delete

  const handleIncomeDelete = (id) => {
    setIncomeData(incomeData.filter((value, index) => index !== id));
  }

  //  function to handle expenditure data

  const handleExpenditureData = () => {
    if (expenditure.trim() !== '' && !isNaN(expenditure)) {
      const value = {
        expenditure,
        expenditureType,
      }
      setExpenditureData([...expenditureData, value]);
      setExpenditure('');
      setExpenditureType('');
    }
  }

  // handle expenditure delete


  const handleExpenditureDelete = (id) => {
    setExpenditureData(expenditureData.filter((value, index) => index !== id));
  }


  // Calculate total income

  const getTotalIncome = () => {
    const total = incomeData.reduce((total, data) => total + (parseFloat(data.income)), 0);
    setTotalIncome(total);
  };

  // Calculate total expenditure

  const getTotalExpenditure = () => {
    const total = expenditureData.reduce((total, data) => total + (parseFloat(data.expenditure)), 0);
    setTotalExpenditure(total);
  };

  useEffect(() => {
    getTotalExpenditure();
    getTotalIncome();
  }, [incomeData, expenditureData])



  // printing details


  const printDetails = () => {
    const printStyle = document.createElement('style');
    printStyle.innerHTML = `
      @media print {
        body * {
          visibility: hidden;
        }
        .print-section, .print-section * {
          visibility: visible;
        }
        .print-section {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          margin: 0;
          padding: 0;
        }
      }
    `;
    document.head.appendChild(printStyle);
    window.print();
    document.head.removeChild(printStyle);
  };





  return (


    <div className='w-[95%] mx-auto h-full py-5 font-poppins'>


      {/* grid parent */}


      <div className='w-full h-full  grid grid-cols-12 gap-5'>


        {/* grid child starts here */}


        {/* income */}

        <div className='h-[300px] lg:h-[400px] col-span-12 lg:col-span-6  box-shadow p-2 flex flex-col rounded-md  dark:bg-slate-800'>

          <h3 className='text-center text-xl mb-2 font-semibold text-primary dark:text-dark-text-secondary '>Income</h3>

          {/* input */}

          <div className='flex gap-2 items-center'>
            {/* income */}
            <input type="text" value={income} placeholder='Enter income' className='border inline-block w-full outline-none rounded-md px-2 py-1 text-secondary shadow bg-transparent dark:text-dark-text-primary dark:border dark:border-[rgba(255,255,255,0.5)]' onChange={(e) => setIncome(e.target.value)} />

            {/* source */}
            <input type="text" value={incomeSource} placeholder='Enter source' className='border inline-block w-full rounded-md px-2 py-1 outline-none text-secondary shadow bg-transparent dark:text-dark-text-primary dark:border dark:border-[rgba(255,255,255,0.5)]' onChange={(e) => setIncomeSource(e.target.value)} />
          </div>

          {/* button to control income */}

          <div className='flex gap-5'>
            <button className='mt-3 bg-sidebar-bg  w-fit px-10 py-1   rounded-2xl shadow text-white dark:bg-transparent dark:text-dark-text-primary dark:border dark:border-[rgba(255,255,255,0.5)] ' onClick={handleIncomeData}>Add</button>

            <button className='mt-3 bg-sidebar-bg w-fit px-10 py-1   rounded-2xl  shadow text-white dark:bg-transparent dark:text-dark-text-primary dark:border dark:border-[rgba(255,255,255,0.5)]' onClick={() => setIncomeData([])}>Clear</button>
          </div>

          {/* display income and source */}

          <div className='mt-2 w-full h-[300px] px-2 overflow-y-auto scrollbar-custom'>



            <table className="w-full table-fixed border-collapse text-center">
              <thead>
                <tr>
                  <th className="border border-gray-300 dark:border-[rgba(255,255,255,0.5)] p-1 text-primary dark:text-dark-text-primary">Income</th>
                  <th className="border border-gray-300 dark:border-[rgba(255,255,255,0.5)] p-1 text-primary dark:text-dark-text-primary">Source</th>
                  <th className="border border-gray-300  dark:border-[rgba(255,255,255,0.5)] p-1 text-primary dark:text-dark-text-primary" style={{ width: '50px', textAlign: 'center' }}><MdDeleteOutline className='text-xl' /></th>

                </tr>
              </thead>

              <tbody>
                {incomeData.map((data, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 p-1 dark:border-[rgba(255,255,255,0.5)]  text-primary dark:text-dark-text-primary">{data.income}</td>
                    <td className="border border-gray-300 dark:border-[rgba(255,255,255,0.5)] p-1 text-primary dark:text-dark-text-primary">{data.incomeSource}</td>
                    <td className="border border-gray-300 dark:border-[rgba(255,255,255,0.5)] p-1 text-primary dark:text-dark-text-primary " style={{ width: '50px', textAlign: 'center', }}>
                      <MdDeleteOutline className='text-xl  text-sidebar-bg cursor-pointer' onClick={() => handleIncomeDelete(index)} />
                    </td>
                  </tr>
                ))}
              </tbody>



            </table>

          </div>

        </div>




        {/* expense */}


        <div className='h-[300px] lg:h-[400px] col-span-12   lg:col-span-6  box-shadow p-2 flex flex-col rounded-md dark:bg-slate-800'>


          <h3 className='text-center text-xl mb-2 font-semibold text-primary dark:text-dark-text-secondary '>Expenses</h3>

          {/* input */}

          <div className='flex gap-2 items-center'>
            {/* expenditure */}
            <input type="text" value={expenditure} placeholder='Expenditure' className='border inline-block w-full outline-none rounded-md px-2 py-1 text-secondary shadow bg-transparent dark:border-[rgba(255,255,255,0.5)] dark:text-dark-text-primary' onChange={(e) => setExpenditure(e.target.value)} />

            {/* source */}
            <input type="text" value={expenditureType} placeholder='Description' className='border inline-block w-full rounded-md px-2 py-1 outline-none text-secondary shadow bg-transparent dark:border-[rgba(255,255,255,0.5)] dark:text-dark-text-primary' onChange={(e) => setExpenditureType(e.target.value)} />
          </div>

          {/* button to control income */}

          <div className='flex gap-5'>
            <button className='mt-3 bg-sidebar-bg w-fit px-10 py-1 rounded-2xl shadow text-white dark:bg-transparent dark:text-dark-text-primary dark:border dark:border-[rgba(255,255,255,0.5)]' onClick={handleExpenditureData}>Add</button>

            <button className='mt-3 bg-sidebar-bg w-fit px-10 py-1   rounded-2xl shadow text-white dark:bg-transparent dark:text-dark-text-primary dark:border dark:border-[rgba(255,255,255,0.5)]' onClick={() => setExpenditureData([])}>Clear</button>
          </div>

          {/* display expenditure and des */}

          <div className='mt-2 w-full h-[300px] lg:h-[400px] px-2 overflow-y-auto scrollbar-custom'>



            <table className="w-full table-fixed border-collapse text-center">
              <thead>
                <tr>
                  <th className="border border-gray-300 dark:border-[rgba(255,255,255,0.5)] p-1  dark:text-dark-text-primary text-primary">Expenditure</th>
                  <th className="border border-gray-300 dark:border-[rgba(255,255,255,0.5)] p-1  dark:text-dark-text-primary text-primary">Description</th>
                  <th className="border border-gray-300 dark:border-[rgba(255,255,255,0.5)] p-1 text-primary dark:text-dark-text-primary" style={{ width: '50px', textAlign: 'center' }}><MdDeleteOutline className='text-xl' /></th>

                </tr>
              </thead>

              <tbody>
                {expenditureData.map((data, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 dark:border-[rgba(255,255,255,0.5)] p-1 text-primary dark:text-dark-text-primary">{data.expenditure}</td>
                    <td className="border border-gray-300 dark:border-[rgba(255,255,255,0.5)] p-1 text-primary dark:text-dark-text-primary">{data.expenditureType}</td>
                    <td className="border border-gray-300 dark:border-[rgba(255,255,255,0.5)] p-1 text-primary dark:text-dark-text-primary " style={{ width: '50px', textAlign: 'center', }}>
                      <MdDeleteOutline className='text-xl  text-sidebar-bg cursor-pointer' onClick={() => handleExpenditureDelete(index)} />
                    </td>
                  </tr>
                ))}
              </tbody>



            </table>

          </div>


        </div>




        {/* expenditure data */}

        <div className='col-span-12 lg:col-span-5 flex flex-col items-center gap-5  h-fit p-5 rounded-md  bg-green-400 box-shadow text-white dark:bg-black dark:text-dark-text-secondary'>

          <p className='w-full flex justify-between text-lg'>Total income: <span className='text-xl font-semibold'>{totalIncome}</span></p>
          <p className='w-full flex justify-between text-lg'>Total expenditure: <span className='text-xl font-semibold'>{totalExpenditure}</span></p>
          <p className='w-full flex justify-between text-lg'>remaining: <span className='text-xl font-semibold'>{totalIncome - totalExpenditure}</span></p>
          <p className='w-full text-center mt-3'>
            You have spent  <span className='text-xl font-semibold'>
              {totalIncome ? (totalExpenditure / totalIncome * 100).toFixed(2) : 0}
            </span>% of your income
          </p>


        </div>



        {/* full details */}



        <div className='col-span-12 lg:col-span-7 h-full row-span-2  box-shadow p-5 text-secondary flex flex-col gap-2 print-section dark:bg-slate-800'>

          <p className='text-center text-2xl underline underline-offset-2 font-semibold text-primary dark:text-dark-text-secondary'>Details</p>

          <div className='flex-1 w-full  flex gap-8 '>

            <div className='w-6/12'>
              {incomeData.map((data, index) => (
                <div key={index} className='flex  flex-row justify-between'>
                  <p className='dark:text-dark-text-primary'>Income: {data.income}</p>
                  <p className='dark:text-dark-text-primary'>Source: {data.incomeSource}</p>
                </div>
              ))}
            </div>

            <div className='w-6/12'>
              {expenditureData.map((data, index) => (
                <div key={index} className='flex  flex-col md:flex-row  justify-between'>
                  <p className='dark:text-dark-text-primary'>Expenditure:{data.expenditure}</p>
                  <p className='dark:text-dark-text-primary'>Desc: {data.expenditureType}</p>
                </div>
              ))}
            </div>

          </div>

          <button onClick={printDetails} className='bg-blue-500 text-white px-4 py-2 rounded inline-block w-fit font-poppins'>
            Print Details
          </button>

        </div>


        {/* grid child ends here */}

      </div>

    </div >
  )
}

export default Expense