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

            <nav className='flex justify-evenly gap-80'>
                <div className="flex items-center space-x-4">
                    <Link to="/home">
                    <img className="w-28" src={navlogo} alt="Logo" />
                    </Link>
                    <div className="relative flex items-center ">
                        <CiSearch className="absolute left-3 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search for Movies, Events, Plays"
                            className="border rounded pl-10  py-1 w-80  outline-none"
                        />
                    </div>
                </div>
                <div className="flex  items-center m-4 gap-5">
                    <select name="city" className='border-white outline-none'>
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