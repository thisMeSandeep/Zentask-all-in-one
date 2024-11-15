import React, { useEffect, useRef } from 'react';
import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { HiMenuAlt3, HiMenuAlt2 } from "react-icons/hi";
import Sidenav from './Sidenav';
import Theme from '../components/Theme';
import { SidebarContext } from '../contexts/sidebar/SidebarContext';

const Layout = () => {
  const { toggle, setToggle } = useContext(SidebarContext);
  const sidebarRef = useRef(null);




  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && toggle && window.innerWidth < 1024) {
        setToggle(false);
      }
    };

    if (toggle) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggle, setToggle]);



  const sidebarStyle = `w-[250px] px-3 bg-sidebar-bg h-full transform ${toggle ? 'lg:translate-x-[-100%]' : 'lg:translate-x-[0]'} ${toggle ? 'translate-x-[0]' : 'translate-x-[-100%]'} absolute top-0 left-0 lg:relative transition-all duration-500 overflow-y-auto z-50 dark:bg-dark-primary`;

  const mainStyle = `w-full h-full relative bg-[rgba(255,255,255,0.7)] flex-1 flex flex-col overflow-y-auto scrollbar-custom overflow-x-hidden ${toggle ? 'lg:ml-[-250px]' : 'lg:ml-[0]'} transition-all duration-500 dark:bg-dark-secondary`;



  return (

    <>
      <main className='flex flex-row relative h-dvh dark:bg-dark-secondary'>

        {/* sidebar */}


        <div ref={sidebarRef} className={sidebarStyle}>

          <div className='flex justify-center items-center'>
            <Link to="/" className='text-3xl font-bold text-gradient-logo py-2' onClick={() => setToggle(prev => !prev)}>ZENTASK</Link>
          </div>

          <hr className='h-[1px] bg-[rgba(255,255,255,0.56)] border-0' />

          <Sidenav />

        </div>


        {/* Main content */}


        <div className={mainStyle}>


          {/* header */}


          <div className="sticky w-full right-0 left-0 z-40 top-0 px-4 py-2 flex items-center bg-[#e0e0e0] dark:bg-[#212121] justify-between duration-500  ">
            {toggle ? (
              <HiMenuAlt3 onClick={() => setToggle(prev => !prev)} className='w-[30px] h-[30px] cursor-pointer text-sidebar-bg' />
            ) : (
              <HiMenuAlt2 onClick={() => setToggle(prev => !prev)} className='w-[30px] h-[30px] cursor-pointer text-sidebar-bg' />
            )}
            <Theme />
          </div>


          <hr className='h-[1px] bg- border-0' />

          

          <div className='flex-1 relative'>
            <Outlet />
          </div>

        </div>
      </main>
    </>
  );
};

export default Layout;
