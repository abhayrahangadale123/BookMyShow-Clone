import React, { useState } from 'react'
import navlogo from "../../assets/bookmylogo.png"
import { CiSearch } from "react-icons/ci";
import { MdOutlineMenu } from "react-icons/md";
import SignUp from '../Sign_up/Sing_up';
import Toggle_bar from '../Sign_up/Toggle_bar';
import { Link } from 'react-router-dom';
const NavBar_One = () => {
    let [sing, SetSing] = useState(false);
    let [toggle, SetToggle] = useState(false);

    return (
        <>

            <nav className='bg-white shadow-md p-2 md:flex md:justify-evenly md:gap-80 md:shadow-md'>
                <div className=" md:flex md:items-center md:space-x-4">
                    <Link to="/home">
                    <img className=" md:w-28" src={navlogo} alt="Logo" />
                    </Link>
                    <div className="relative flex items-center  md:mt-10  ">
                        <CiSearch className="absolute left-3 text-gray-400 mt-[-5vh] " />
                        <input
                            type="text"
                            placeholder="Search for Movies, Events, Plays"
                            className="mt-[-5vh] border rounded pl-10  py-1 w-44  outline-none md:w-80"
                        />
                    </div>
                </div>
                <div className="flex  items-center m-4 gap-5 md:gap-7 ">
                    <select name="city" className=' hidden  md:block  border-white outline-none hover:bg-white'>
                        <option value="jabalpur" selected>Jabalpur</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="delhi">Delhi</option>
                        <option value="kolkata">Kolkata</option>
                        <option value="chennai">Chennai</option>
                        <option value="bangalore">Bangalore</option>
                    </select>

                    <button onClick={() => SetSing(true)} className="bg-red-500 text-gray-50  px-3 py-1 rounded text-xs md:relative md:top-0 md:left-[-1vw] absolute right-20 top-[23vh]"> Sign in  </button>
                    <MdOutlineMenu className='text-3xl hover:cursor-pointer md:relative md:top-0 absolute right-8 top-[22.5vh]' onClick={() => { SetToggle(true) }} />
                </div>
            </nav>

            <SignUp sing={sing} SetSing={SetSing} />
            <Toggle_bar toggle={toggle} SetToggle={SetToggle} />

        </>
    )
}

export default NavBar_One


 /*
 
 import React, { useState } from 'react'
import navlogo from "../../assets/bookmylogo.png"
import { CiSearch } from "react-icons/ci";
import { MdOutlineMenu } from "react-icons/md";
import SignUp from '../Sign_up/Sing_up';
import Toggle_bar from '../Sign_up/Toggle_bar';
import { Link } from 'react-router-dom';
const NavBar_One = () => {
    let [sing, SetSing] = useState(false);
    let [toggle, SetToggle] = useState(false);

    return (
        <>

            <nav className='bg-white shadow-md p-2 md:flex md:justify-evenly md:gap-80 md:shadow-md'>
                <div className=" md:flex md:items-center md:space-x-4">
                    <Link to="/home">
                    <img className=" md:w-28" src={navlogo} alt="Logo" />
                    </Link>
                    <div className="relative flex items-center   ">
                        <CiSearch className="absolute left-3 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search for Movies, Events, Plays"
                            className="border rounded pl-10  py-1 md:w-80  outline-none"
                        />
                    </div>
                </div>
                <div className="flex  items-center m-4 gap-5 md:gap-5">
                    <select name="city" className='border-white outline-none hover:bg-white'>
                        <option value="jabalpur" selected>Jabalpur</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="delhi">Delhi</option>
                        <option value="kolkata">Kolkata</option>
                        <option value="chennai">Chennai</option>
                        <option value="bangalore">Bangalore</option>
                    </select>

                    <button onClick={() => SetSing(true)} className="bg-red-500 text-gray-50  px-3 py-1 rounded text-xs"> Sign in  </button>
                    <MdOutlineMenu className='text-3xl hover:cursor-pointer ' onClick={() => { SetToggle(true) }} />
                </div>
            </nav>

            <SignUp sing={sing} SetSing={SetSing} />
            <Toggle_bar toggle={toggle} SetToggle={SetToggle} />

        </>
    )
}

export default NavBar_One


 
 
 
 */