
import React from 'react'
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoTicketOutline } from "react-icons/io5";
import { MdNewspaper } from "react-icons/md";
import { FaHouseLaptop } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { RiCustomerServiceLine } from "react-icons/ri";










const Footer = () => {
    return (
        <div className='bg-[#333338] mt-20'>
            <footer className=' text-white max-w-[1300px] py-5 mx-auto'>
                <div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2 ml-5'>
                            <img src="https://in.bmscdn.com/webin/common/icons/hut.svg" alt="" />
                            <h1 className='mr-5 font-semibold text-xl flex gap-1 items-center'>  List Your Show</h1>
                            <p className=''>Got a show,event,activity or a great experience? Partner with us & get listed on BookMyShow</p>
                        </div>
                        <button className='w-36 py-2 bg-[#EC5E71] rounded-md font-semibold hover:bg-red-400'>Contect today!</button>
                    </div>


                    <div className='bg-[#404043] mt-5 p-5 flex justify-around capitalize text-[#999] '>
                        <div className='flex flex-col items-center'>
                            <RiCustomerServiceLine className='text-[50px]' />
                            <p>24/7 customer care</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <IoTicketOutline className='text-[50px]' />
                            <p>resend booking confirmation</p>
                        </div>

                        <div className='flex flex-col items-center'>
                            <MdNewspaper className='text-[50px]' />
                            <p>subscribe to the newsletter</p>
                        </div>
                    </div>



                    <div className=' mt-8'>
                        <h2 className='text-[#dcdcdcd6]  text-sm'>MOVIES NOW SHOWING IN JABALPUR</h2>
                        <p className='text-[#888] text-sm mt-2'>Kanguva | Bhool Bhulyaa 3 | Singham Again | Gladistor</p>
                    </div>

                    <div className=' mt-8'>
                        <h2 className='text-[#dcdcdcd6] text-sm'>UPCOMING MOVIES IN JABALPUR</h2>
                        <p className='text-[#888] text-sm mt-2'>Radio Ghaint(Radio Awesome) | Anshu | Desakkaaran | Raanti | Mandira | Aaram Arvindswamy</p>
                    </div>

                    <div className="mt-8">
                        <h2 className='text-[#dcdcdcd6] text-sm'>MOVIES BY GENRE</h2>
                        <p className='text-[#888] text-sm mt-2'>
                            Drama Movies | Action Movies | Adventure Movies | Bollywood Movies | Classic Movies | Devotional Movies | Biography Movies | Mystery Movies | Political Movies | Supernatural Movies
                        </p>
                    </div>
                    <div className="mt-8">
                        <h2 className='text-[#dcdcdcd6] text-sm'>MOVIES BY LANGUAGE</h2>
                        <p className='text-[#888] text-sm mt-2'>
                            Movies in Hindi | Movies in English | Movies in Nepali | Movies in Kannada | Movies in Sindhi | Movies in Chhattisgarhi | Movies in Konkani | Movies in Japanese | Movies in Khasi | Movies in Rajasthani
                        </p>
                    </div>
                    <div className="mt-8">
                        <h2 className='text-[#dcdcdcd6] text-sm'>SPORTS EVENTS IN JABALPUR</h2>
                        <p className='text-[#888] text-sm mt-2'>Running | Chess | Football | Kabaddi | Basketball | Baseball | Boat Race | Bowling | E Sports | Horse Race</p>

                    </div>
                    <div className="mt-8">
                        <h2 className='text-[#dcdcdcd6] text-sm'>EVENTS IN TOP CITIES</h2>
                        <p className='text-[#888] text-sm mt-2'>
                            Events in Mumbai | Events in Delhi-NCR | Events in Chennai | Events in Bengaluru | Events in Hyderabad | Events in Pune | Events in Ahmedabad | Events in Kolkata | Events in Kochi
                        </p>
                    </div>
                    <div className="mt-8">
                        <h2 className='text-[#dcdcdcd6] text-sm'>CINEMAS IN TOP CITIES</h2>
                        <p className='text-[#888] text-sm mt-2'>
                            Cinemas in Mumbai | Cinemas in Delhi-NCR | Cinemas in Chennai | Cinemas in Bengaluru | Cinemas in Hyderabad | Cinemas in Pune | Cinemas in Ahmedabad | Cinemas in Kolkata | Cinemas in Kochi
                        </p>
                    </div>
                    <div className="mt-8">
                        <h2 className='text-[#dcdcdcd6] text-sm'>PLAYS IN TOP CITIES</h2>
                        <p className='text-[#888] text-sm mt-2'>
                            Plays in Mumbai | Plays in Delhi-NCR | Plays in Chennai | Plays in Bengaluru | Plays in Hyderabad | Plays in Pune | Plays in Ahmedabad | Plays in Kolkata | Plays in Kochi
                        </p>

                    </div>
                    <div className="mt-8">
                        <h2 className='text-[#dcdcdcd6] text-sm'> ACTIVITIES IN TOP CITIES</h2>
                        <p className='text-[#888] text-sm mt-2'>
                            Activities in Mumbai | Activities in Delhi-NCR | Activities in Chennai | Activities in Bengaluru | Activities in Hyderabad | Activities in Pune | Activities in Ahmedabad | Activities in Kolkata | Activities in Kochi
                        </p>
                    </div>
                    <div className="mt-8">
                        <h2 className='text-[#dcdcdcd6] text-sm'>MOVIES NOW SHOWING</h2>
                        <p className='text-[#888] text-sm mt-2'>Same as above (if repetitive)</p>
                    </div>






























 
                    <p className="flex items-center justify-center mt-10">
                         <span className="flex-grow h-[1px] bg-gray-400"> </span>  
                        <img className="w-32 mx-4 cursor-pointer" src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="BookMyShow Logo" />
                        <span className="flex-grow h-[1px] bg-gray-400"></span>
                    </p>


                    <div className='flex gap-3 items-center justify-center my-10'>
                        <a ><FaFacebook title='facebook' className='text-[#888] text-3xl cursor-pointer hover:text-[#fff]' /></a>
                        <a href='' target='_blank' ><FaSquareXTwitter title='Twiter' className='text-[#888] text-3xl cursor-pointer hover:text-[#fff]' /></a>
                        <a href='' target='_blank' ><FaSquareInstagram title='instagram' className='text-[#888] text-3xl cursor-pointer hover:text-[#fff]' /></a>
                        <a href='' target='_blank' ><IoLogoYoutube title='youtube' className='text-[#888] text-3xl cursor-pointer hover:text-[#fff]' /></a>
                        <a href='' target='_blank' ><FaLinkedin title='linkedin' className='text-[#888] text-3xl cursor-pointer hover:text-[#fff]' /></a>
                        <a href='' target='_blank' ><FaGithub title='github' className='text-[#888] text-3xl cursor-pointer hover:text-[#fff]' /></a>
                    </div>


                    <p className='text-[#888] hover:text-[#fff] text-center'>Copyright 2024 <a className='hover:underline' href="/" target="_self">@BookMyShow</a> Ltd.</p></div>
            </footer>
        </div>
    )
}

export default Footer
