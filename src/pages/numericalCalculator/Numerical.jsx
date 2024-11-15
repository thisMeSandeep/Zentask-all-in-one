import React, { useState, useEffect } from 'react';
import { HiOutlineArrowsUpDown } from "react-icons/hi2";

const Numerical = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [inputType, setInputType] = useState('Decimal');
    const [outputType, setOutputType] = useState('Binary');



    // Function to process the input 

    const processInput = () => {
        if (input === '') {
            setOutput('');
            return;
        }

        // Convert input value into decimal type

        let decimalInput;
        switch (inputType) {
            case "Octal":
                decimalInput = parseInt(input, 8);
                break;
            case "Binary":
                decimalInput = parseInt(input, 2);
                break;
            case "Hexadecimal":
                decimalInput = parseInt(input, 16);
                break;
            default:
                decimalInput = parseInt(input, 10);
        }

        // Handle invalid input 

        if (isNaN(decimalInput)) {
            setOutput('Invalid input');
            return;
        }

        // Convert decimal to desired output type

        let result;
        switch (outputType) {
            case "Binary":
                result = decimalInput.toString(2);
                break;
            case "Octal":
                result = decimalInput.toString(8);
                break;
            case "Hexadecimal":
                result = decimalInput.toString(16).toUpperCase();
                break;
            default:
                result = decimalInput;
        }

        setOutput(result);
    };

    
    useEffect(() => {
        processInput();
    }, [input, inputType, outputType]);


    return (
        <div className='w-[95%] h-full mx-auto flex justify-center items-center gap-5  font-poppins'>

            {/* Input and output field */}

            <div className='w-full md:w-[50%]  flex flex-col gap-5 p-4 rounded-2xl bg-[rgba(110,101,101,0.2)] dark:bg-dark-primary'>


                {/* Input */}
                <p className='text-2xl text-primary dark:text-dark-text-secondary'>Enter Number</p>
                <input
                    type="text"
                    value={input}
                    className='w-full border text-2xl px-2 py-3 rounded-2xl text-primary shadow-md outline-green-400 dark:bg-transparent dark:border-[rgba(255,255,255,0.5)] dark:text-dark-text-secondary'
                    onChange={(e) => setInput(e.target.value)}
                />

                <select
                    className='w-full  border shadow-md px-2 py-3 rounded-2xl outline-none text-primary font-light dark:bg-transparent dark:border-[rgba(255,255,255,0.5)] dark:text-dark-text-secondary'
                    value={inputType}
                    onChange={(e) => setInputType(e.target.value)}
                >
                    <option value="Decimal">Decimal DEC</option>
                    <option value="Binary">Binary BIN</option>
                    <option value="Octal">Octal OCT</option>
                    <option value="Hexadecimal">Hexadecimal HEX</option>
                </select>


                {/* Icon */}

                <div className='w-fit mx-auto  rounded-full p-2 bg-orange-400'>
                    <HiOutlineArrowsUpDown className='text-[50px] md:[text-70px] text-white' />
                </div>



                {/* Output */}
                <select
                    className='w-full  border shadow-md px-2 py-3 rounded-2xl outline-none text-primary font-light dark:bg-transparent dark:border-[rgba(255,255,255,0.5)] dark:text-dark-text-secondary'
                    value={outputType}
                    onChange={(e) => setOutputType(e.target.value)}
                >
                    <option value="Binary">Binary BIN</option>
                    <option value="Octal">Octal OCT</option>
                    <option value="Hexadecimal">Hexadecimal HEX</option>
                    <option value="Decimal">Decimal DEC</option>
                </select>

                <p className='text-2xl text-primary outline-none dark:text-dark-text-secondary'>Output</p>
                <input
                    type="text"
                    value={output}
                    className='w-full border text-2xl px-2 py-3 rounded-2xl text-primary shadow-md outline-none dark:bg-transparent dark:border-[rgba(255,255,255,0.5)] dark:text-dark-text-secondary'
                    readOnly
                />

            </div>
        </div>
    );
};

export default Numerical;
