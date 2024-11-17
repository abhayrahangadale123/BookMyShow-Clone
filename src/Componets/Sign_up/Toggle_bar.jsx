import React from 'react'
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiLock } from "react-icons/ci";
import { GoGift } from "react-icons/go";
const Toggle_bar = ({toggle ,SetToggle}) => {
  return (
    <>
      <div className='bg-[#55555591] h-full w-full rounded fixed z-10 mt-[-9vh]'
        style={{opacity:toggle?1:0,visibility:toggle?"visible":"hidden"}}
        onClick={()=>SetToggle(false)}>
                <div className='w-[400px] h-full bg-white fixed right-0 '>
                    <h2 className='text-xl text-[#404040] font-bold p-4'>Hey!</h2>
                    <p className='bg-gray-500 h-[1px] mt-3'></p>

                    <div className='flex items-center gap-4 mt-5 shadow-xl p-2 pb-4'>
                        <img className='h-10 w-10' src='https://in.bmscdn.com/webin/movies/superstar/rewards_login.png' alt="" />
                        <p className='text-[14px] font-bold text-[#747eaae1]'>Unlock spacial offers & great benefits</p>
                        <p className='border border-red-600 rounded text-xs w-36 p-2 text-[red] font-bold cursor-pointer'>Login/Register</p>
                    </div>

                    <div className='flex items-center justify-between p-5'>
                        <p className='flex items-center gap-3 text-[14px]  text-[#444] font-bold'><IoIosNotificationsOutline className='text-2xl' /> Notifications</p> <span>⟩</span>
                    </div>

                    <p className='bg-gray-300 h-[1px] mt-3'></p>


                    <div className='flex items-center justify-between p-5'>
                        <div className='flex items-center gap-3 text-[14px]  text-[#333] font-bold'><FaShoppingCart className='text-2xl' />
                            <div>
                                <h2 className='font-bold'>Your Orders</h2>
                                <p className='text-xs capitalize'>View Your Booking & Purcheses</p>
                            </div>
                        </div>
                        <CiLock className='text-2xl' />
                    </div>



                    <p className='bg-gray-200 h-[1px] mt-3'></p>
                    <div className='flex items-center justify-between p-5'>
                        <div className='flex items-center  gap-3 text-[14px]  text-[#888]'><HiOutlineCurrencyRupee className='text-2xl' />
                            <div>
                                <h2 className='font-bold'>Play Creadit Card</h2>
                                <p className='text-xs'>View Your Play Creadit Card Details</p>
                            </div>
                        </div> < CiLock className='text-2xl' />
                    </div>



                    <p className='bg-gray-200 h-[1px] mt-3'></p>
                    <div className='flex items-center justify-between p-5'>
                        <div className='flex items-center  gap-3 text-[14px]  text-[#888]'><IoChatbubbleEllipsesOutline className='text-2xl' />
                            <div>
                                <h2 className='font-bold'>Help & Support</h2>
                                <p className='text-xs capitalize'>View Commanly Asked Quaries  and chats</p>
                            </div>
                        </div> <span span className='text-2xl' >⟩</span>
                    </div>


                    <p className='bg-gray-200 h-[1px] mt-3'></p>
                    <div className='flex items-center justify-between p-5'>
                        <div className='flex items-center  gap-3 text-[14px]  text-[#333]'><GoGift className='text-2xl' />
                            <div>
                                <h2 className='font-bold'>Rewards</h2>
                                <p className='text-xs capitalize'>View Your Rewards & Unlocks New Ones</p>
                            </div>
                        </div> < CiLock className='text-2xl' />
                    </div>


                </div>
            </div>


            
    </>
  )
}

export default Toggle_bar