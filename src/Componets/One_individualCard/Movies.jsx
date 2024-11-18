import React, { useContext, useState } from 'react'
import { Context } from '../Contex_Data/C_Data';
import Slaid_Bar from '../slaid_Bar/Slaid_Bar';
 
import { useNavigate } from 'react-router-dom';

const Movies = () => {
    console.log("koi ayyyyyyyyyyyyyyyyy");

    const { Recommended_Movies_Data } = useContext(Context)
    let navigate = useNavigate();
    function clickHandler(id) {
        navigate(`/Movies_Jabalpur/${id}`);
    }
    return (
        <>
            <Slaid_Bar />
            <div className="flex flex-col gap-5 bg-[#F5F5F5] overflow-x-hidden">


                <div className="flex justify-center align-middle gap-8  ">

                    <div className="w-1/3 ">
                        <div className="mx-auto ml-28  ">

                            <h1 className='mb-2 mt-14 ml-2  text-2xl font-bold text-[#333333] '> Filter</h1>


                            <div className="flex gap-5 flex-wrap w-full mt-5 ">
                                <div className="shadow-2xl w-80 h-18 rounded-md p-5 ">
                                    <div className="flex justify-between">
                                        <details className="">
                                            <summary className='text-[#333333]  cursor-pointer  '>Language</summary>
                                            <div className="flex  gap-2">
                                                <p className='text-[#DE354B] border mt-6 p-1 px-3 '>Hindi</p>
                                                <p className='text-[#DE354B] border mt-6 p-1 px-3 '>English</p>

                                            </div>
                                        </details>
                                        <p>clear</p>
                                    </div>

                                </div>
                                <div className="shadow-2xl w-80 h-18 rounded-md p-5 ">
                                    <div className="flex justify-between">
                                        <details className="">
                                            <summary className='text-[#333333]  cursor-pointer  '>Geres</summary>
                                            <div className="flex justify-between flex-wrap">
                                                <p className='text-[#DE354B] border mt-6 p-1 px-3 '>Action</p>
                                                <p className='text-[#DE354B] border mt-6 p-1 px-3 '>Drama</p>
                                                <p className='text-[#DE354B] border mt-6 p-1 px-3 '>Adventure</p>
                                                <p className='text-[#DE354B] border mt-6 p-1 px-3 '>Period</p>
                                                <p className='text-[#DE354B] border mt-6 p-1 px-3 '>Comedy</p>
                                                <p className='text-[#DE354B] border mt-6 p-1 px-3 '>Horror</p>
                                                <p className='text-[#DE354B] border mt-6 p-1 px-3 '>Historical</p>


                                            </div>
                                        </details>
                                        <p>clear</p>
                                    </div>

                                </div>
                                <div className="shadow-2xl w-80 h-18 rounded-md p-5 ">
                                    <div className="flex justify-between">
                                        <details className="">
                                            <summary className='text-[#333333]  cursor-pointer  '>Format</summary>
                                            <div className="flex gap-2">

                                                <p className='text-[#DE354B] border mt-6 p-1 px-3 w-16'>2D</p>
                                                <p className='text-[#DE354B] border mt-6 p-1 px-3 w-16'>3D</p>
                                            </div>
                                        </details>
                                        <p>clear</p>
                                    </div>

                                </div>
                                <button className='border w-full p-2 mt-5 border-red-400 rounded-sm text-[#DE354B] hover:border-red-600 duration-150'>Browser by Cinemas</button>
                            </div>
                        </div>

                    </div>
                    <div className="mt-10">


                        <h1 className=' m-4 ml-10 text-2xl font-bold text-[#333333]  '>  Movies in Jablpur </h1>
                        <button className=' m-4 p-2 ml-10 text-sm text-[#f9f6f6] border w-14 bg-[#DE354B]   rounded-full'>Hindi</button>
                        <div className="m-4 p-6 ml-10 flex justify-between shadow-2xl align-middle mt-auto ">
                            <h1 className='text-xl font-semibold mt-2'>Comming soon</h1>
                            <h5 className='mt-2 text-[#DE354B] cursor-pointer'>Explor Upcoming Movies </h5>
                        </div>
                        <div className="flex justify-center gap-8 flex-wrap cursor-pointer ">
                            {
                                Recommended_Movies_Data.map((val ,id) => (
                                    <>
                                        <div onClick={() => clickHandler(id)} className="key={index} ">

                                            <img src={val.movie_img} alt="" className='w-56 h-96 border rounded-xl relative ' />
                                            <div className="mt-1">

                                                <h1 className=' font-semibold text-xl'>{val.movie_name}</h1>
                                                <p className='text-[#928e8e]  '>{val.Action_movie}</p>
                                            </div>

                                        </div>


                                    </>
                                ))
                            }
                        </div>
                    </div>

                </div>

                <div className="shadow-2xl bg-white p-3 w-full">
                    <h1 className='mx-32 text-[#767575] text-sm'>Home - Movies</h1>
                </div>
                <div className="">
                    <div class="container  px-3 mx-32">
                        <h2 class="text-sm font-semibold mb-1 text-[#717171]">
                            Enjoy Online Ticket Booking for Movies in Jabalpur With BookMyShow
                        </h2>
                        <p class="text-gray-600 mb-6 text-xs w-[80vw] tracking-wide ">
                            If you are planning for movie ticket bookings for the latest movies in Mumbai, don’t look any further. Now it is 
                            easy to get on with online ticket booking with BookMyShow. Your one-stop solution for movies to watch this weekend
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident velit ducimus consequuntur quo eveniet? Vitae dolore quam quidem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut dolorem aut, recusandae laboriosam reiciendis eos iste harum atque dolor neque, debitis eveniet ducimus nihil? Saepe, amet alias eos quod exercitationem mollitia eligendi ullam tenetur sunt autem, suscipit similique deleniti, sed illo. Explicabo quis, sapiente aperiam at sequi perspiciatis. Repellat, voluptatibus! architecto accusantium.
                        </p>

                        <h2 class="text-sm font-semibold mb-1 text-[#717171]">
                            Latest Movies To Watch in Jabalpur With Family And Friends
                        </h2>
                        <p class="text-gray-600 mb-6 text-xs w-[80vw] tracking-wide">
                            Each year the cinema world is enlightened with the latest movie trailers, increasing the excitement among everyone. This year, just like the previous year, you have been waiting for some of the biggest Bollywood movies Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis aperiam ducimus repellendus soluta atque, consectetur perspiciatis laudantium consequatur ea excepturi dicta quisquam quo! Porro eveniet, possimus minus id perferendis quae veritatis itaque sequi. Ipsa debitis doloremque quisquam, perferendis autem placeat explicabo distinctio, error at nihil optio atque quo quae aliquid!
                        </p>

                        <h2 class="text-sm font-semibold mb-1 text-[#717171]">
                            Upcoming Bollywood & Hollywood Movies That You Can’t Miss
                        </h2>
                        <p class="text-gray-600 mb-6 text-xs w-[80vw] tracking-wide">
                            Have you checked out the latest movie reviews of some of the best Hollywood movies? If so, we bet you would want to watch them all in the nearest movie theatre! With the anticipation of the release of Singham Again & Bhool Bhulaiyaa 3
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, corporis! Illum blanditiis quibusdam beatae sit tempore quas architecto laboriosam officiis laudantium impedit. Consequuntur, enim harum! Corporis consequatur non vero consectetur nam ipsum alias in, similique quod odit voluptatem, eligendi tenetur facilis, quis officiis eum illo maiores perferendis. Ab voluptas ullam, minus distinctio inventore nobis facilis.
                        </p>

                        <h2 class="text-sm font-semibold mb-1 text-[#717171]">
                            Exciting Tollywood & Kollywood Movies To Book Tickets
                        </h2>
                        <p class="text-gray-600 mb-6 text-xs w-[80vw] tracking-wide">
                            Just like <span className='text-[#DE354B]'>   Bollywood and Hollywood movies, Tollywood </span>  seems to have a few good movie showtimes as well. You can plan for movies to watch this Friday with these Tollywood movies Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor aliquam non vitae enim commodi voluptatum cumque accusamus nesciunt, nobis dicta dolorum natus velit, placeat mollitia quidem quos! Nobis magni cupiditate velit debitis ipsam tenetur, beatae, iure dolor temporibus, quod sequi.
                        </p>

                        <h2 class="text-sm font-semibold mb-1 text-[#717171]">
                            The Joy Of Movie Tickets Bookings with Just a Few Clicks
                        </h2>
                        <p class="text-gray-600 mb-6 text-xs w-[80vw] tracking-wide">
                            Grab on your popcorn because there are many movies to watch today in Mumbai. If you want to save some money, don’t miss out on our movie offers and discounts. Check out the movies running in cinemas Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga porro assumenda deleniti laborum sit doloribus rem possimus impedit voluptas sint!

                        </p>
                    </div>

                </div>

               


            </div>
        </>
    )
}

export default Movies