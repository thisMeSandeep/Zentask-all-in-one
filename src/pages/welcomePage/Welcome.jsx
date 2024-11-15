import React from 'react'
import { useContext } from 'react'
import bgLight from '../../assets/bgLight.jpg'
import bgDark from '../../assets/bgDark.jpg'
import { ThemeContext } from '../../contexts/theme/ThemeContext'


const Welcome = () => {


  const { theme } = useContext(ThemeContext);


  return (
    <div

      className={`w-full h-full flex justify-center  items-center z-40 bg-cover bg-no-repeat bg-center  relative`}
      style={{ backgroundImage: theme === 'dark' ? `url(${bgDark})` : `url(${bgLight})` }}
    >


      <div className=' text-center font-poppins'>
      
        <h1 className=' text-[4rem] md:text-[6rem] lg:text-[11rem] font-bold text-gradient  '>ZENTASK</h1>

        <p className='text-md sm:text-lg text-secondary px-2 sm:px-0 dark:text-dark-text-primary'>ZenTask - Your Daily Companion for Productivity.<span className='block'> Stay focused, stay productive, stay Zen</span> </p>

        <p className='mt-4 text-secondary underline underline-offset italic lg:hidden '>Open the side bar to view features</p>

      </div>

    </div>
  )
}

export default Welcome