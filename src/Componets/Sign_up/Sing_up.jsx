import React from 'react';
import { RxCross2 } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { FaApple } from "react-icons/fa";
import ind_flag from "../../assets/india_flg.png"

const SignUp = ({ sing, SetSing }) => {
    return (
        <>
            <div className=" z-10  fixed w-full bg-black bg-opacity-50 h-full transition-all duration-300 md:mt-[-10vh] mt-[-15vh]"
                style={{ opacity: sing ? 1 : 0, visibility: sing ? 'visible' : 'hidden' }}
                onClick={() => SetSing(false)}>
                <div className=" flex items-center  bg-white  flex-col  md:w-[30vw] md:h-[75vh] p-5 md:mt-20   mx-auto  rounded-sm shadow-lg transition-transform duration-300 "
                    onClick={(e) => e.stopPropagation()} >
                    {/* Header */}
                    <div className=" flex text-center justify-between align-middle mb-4 mt-1 gap-16">
                        <p></p>
                        <h4 className="text-lg font-semibold text-gray-700">Get Started</h4>
                        <RxCross2 className="text-2xl cursor-pointer " onClick={() => SetSing(false)} />
                    </div>

                    {/* Button Section */}
                    <div className="flex flex-col gap-4 mt-10">
                        <button className="flex items-center gap-16 bg-white text-gray-500 p-3 rounded-md shadow-sm border md:w-[25vw] ">
                            <FcGoogle className="text-xl" />
                            Continue with Google
                        </button>

                        <button className="flex items-center gap-16 bg-white text-gray-500 p-3 rounded-md shadow-sm border">
                            <HiOutlineMail className="text-xl" />
                            Continue with Email
                        </button>

                        <button className="flex items-center gap-16 bg-white text-gray-500 p-3 rounded-md shadow-sm border">
                            <FaApple className="text-xl" />
                            Continue with Apple
                        </button>

                        <p className="text-center text-sm text-gray-500">OR</p>
                    </div>
                    <div className="flex gap-2 align-middle mt-20 ">
                        <img src={ind_flag} alt="" className='w-6 h-6' />
                        <label htmlFor="" className='text-gray-500'>+91</label>
                        <input  type="text"  className=' px-2 border-b-2 md:w-[19vw] w-[40vw] outline-none hover:border-red-300'/>
                    </div>


                    <p className='text-gray-700 text-sm mt-14'> I agree to The <span className='border-b-2'>Trems & Conditions & <span>Privacy Policy</span> </span></p>
                </div>
            </div>
        </>
    );
};

export default SignUp;
