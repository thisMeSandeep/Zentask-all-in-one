import React from 'react'
import {useContext } from 'react'
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { ThemeContext } from '../contexts/theme/ThemeContext';



const Theme = () => {

   const {theme , setTheme}=useContext(ThemeContext);

    return (


        <div>
            {theme === 'dark' ?
                <MdLightMode
                    className='text-2xl sm:text-3xl lg:text-3xl cursor-pointer text-yellow-500'
                    onClick={() => setTheme('light')}
                />
                :
                <MdDarkMode
                    className='text-2xl sm:text-3xl lg:text-3xl cursor-pointer text-yellow-500 '
                    onClick={() => setTheme('dark')}
                />
            }
        </div>


    )
}

export default Theme