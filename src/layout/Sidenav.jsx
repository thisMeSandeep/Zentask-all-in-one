import { NavLink } from "react-router-dom";
import { FaListCheck } from "react-icons/fa6";
import { GrNotes } from "react-icons/gr";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdAttachMoney } from "react-icons/md";
import { LuAlarmClock } from "react-icons/lu";
import { TbTools } from "react-icons/tb";
import { MdCurrencyExchange } from "react-icons/md";
import { TbDiscount } from "react-icons/tb";
import { LuBinary } from "react-icons/lu";
import { CiCalculator2 } from "react-icons/ci";
import { useContext } from "react";
import { SidebarContext } from "../contexts/sidebar/SidebarContext";

import React from 'react'

let activeStyle = "flex items-center gap-5 px-6 py-3 rounded-full bg-white text-orange-500 mt-3"
let defaultStyle = "flex items-center gap-5 hover:bg-navitem-hover px-6 py-3 rounded-full text-white mt-3"

const Sidenav = () => {

    const { toggle, setToggle } = useContext(SidebarContext);


    return (
        <div className="px-2  mt-5 text-nowrap font-poppins ">
            <ul>


                {/* to do */}
                <NavLink
                    to="todo"
                    className={({ isActive }) =>
                        isActive
                            ? `${activeStyle}`
                            : `${defaultStyle}`
                    }
                    onClick={() => setToggle(prev => !prev)}
                >
                    <FaListCheck className="text-xl" />
                    <p className="text-sm font-light">Daily-Todo</p>
                </NavLink>

                {/* notes */}

                <NavLink
                    to="notes"
                    className={({ isActive }) =>
                        isActive
                            ? `${activeStyle}`
                            : `${defaultStyle}`
                    }
                    onClick={() => setToggle(prev => !prev)}
                >
                    <GrNotes className="text-xl" />
                    <p className="text-sm font-light">Notes</p>
                </NavLink>

                {/* weather */}

                <NavLink
                    to="weather"
                    className={({ isActive }) =>
                        isActive
                            ? `${activeStyle}`
                            : `${defaultStyle}`
                    }
                    onClick={() => setToggle(prev => !prev)}
                >
                    <TiWeatherPartlySunny className="text-xl" />
                    <p className="text-sm font-light">Weather</p>
                </NavLink>


                {/* Expense tracker */}

                <NavLink
                    to="expense"
                    className={({ isActive }) =>
                        isActive
                            ? `${activeStyle}`
                            : `${defaultStyle}`
                    }
                    onClick={() => setToggle(prev => !prev)}
                >
                    <MdAttachMoney className="text-xl" />
                    <p className="text-sm font-light">Expense Tracker</p>
                </NavLink>


                {/* Fitness tracker */}

                <NavLink
                    to="clock"
                    className={({ isActive }) =>
                        isActive
                            ? `${activeStyle}`
                            : `${defaultStyle}`
                    }
                    onClick={() => setToggle(prev => !prev)}
                >
                    <LuAlarmClock className="text-xl" />
                    <p className="text-sm font-light">Clock</p>
                </NavLink>


                {/* tools */}

                <details className=" flex items-center gap-5 hover:bg-navitem-hover px-6 py-3 rounded-full text-white relative mt-3">
                    <summary className="flex items-center gap-5 cursor-pointer">
                        <TbTools className="text-xl" /> <p className="text-sm font-light">Tools</p>
                    </summary>

                    <div className=" absolute mt-5 left-0  -ml-3 py-3 rounded-lg  border border-[rgba(255,255,255,0.2)] dark:bg-[rgba(0,0,0,0.2)]   shadow-2xl">

                        {/* Currency Convertor */}

                        <NavLink
                            to="currency"
                            className={({ isActive }) =>
                                isActive
                                    ? `${activeStyle}`
                                    : `${defaultStyle}`
                            }
                            onClick={() => setToggle(prev => !prev)}
                        >
                            <MdCurrencyExchange className="text-xl" />
                            <p className="text-sm font-light">Currency Convertor</p>
                        </NavLink>


                        {/* Discount calculator */}


                        <NavLink
                            to="discount"
                            className={({ isActive }) =>
                                isActive
                                    ? `${activeStyle}`
                                    : `${defaultStyle}`
                            }
                            onClick={() => setToggle(prev => !prev)}
                        >
                            <TbDiscount className="text-xl" />
                            <p className="text-sm font-light">Discount Calculator</p>
                        </NavLink>

                        {/* Numerical calculator */}

                        <NavLink
                            to="numerical"
                            className={({ isActive }) =>
                                isActive
                                    ? `${activeStyle}`
                                    : `${defaultStyle}`
                            }
                            onClick={() => setToggle(prev => !prev)}
                        >
                            <LuBinary className="text-xl" />
                            <p className="text-sm font-light">Numerical Convertor</p>
                        </NavLink>

                        {/* calculator */}

                        <NavLink
                            to="calculator"
                            className={({ isActive }) =>
                                isActive
                                    ? `${activeStyle}`
                                    : `${defaultStyle}`
                            }
                            onClick={() => setToggle(prev => !prev)}
                        >
                            <CiCalculator2 className="text-xl" />
                            <p className="text-sm font-light">Calculator</p>
                        </NavLink>



                    </div>

                </details>







            </ul>

        </div>
    )
}

export default Sidenav