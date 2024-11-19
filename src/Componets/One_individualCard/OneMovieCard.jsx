import React, { useContext } from "react";
import { Context } from "../Contex_Data/C_Data";
import { useParams } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { BsReply } from "react-icons/bs";
import { GoReport } from "react-icons/go";
import { IoShareOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
 

const OneMovieCard = () => {
    let { id } = useParams();
    let { Recommended_Movies_Data } = useContext(Context);


    console.log(id, "idddddddddddddddddddd");


    console.log("Recommended Movies Data:", Recommended_Movies_Data);
    let NewData = Recommended_Movies_Data.filter((_, ind) => ind == id);
    console.log("Filtered Data:", NewData);

    if (NewData.length === 0) {
        return <h1 className="text-center text-2xl text-red-500">Movie Not Found!</h1>;
    }


    




    return (
        <> 
        
        <div className="overflow-hidden">
    
            {
                NewData.map((val) => {
                    return (
                        <div>
                            <h1 className="md:hidden text-[#2b2a2a] text-xl p-4 font-bold">{val.movie_name}</h1>
                            <div 
                                style={{
                                    backgroundImage: `
                                linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)), 
                                url(${val.cover})
                             `,
                                }}
                                className=" h-72 rounded-md  md:h-[600px] md:w-full bg-cover bg-center bg-no-repeat flex flex-col md:flex-row items-center gap-16">

                                <div className=' hidden md:block h-[400px] ml-40  overflow-hidden relative'>
                                    <img className='h-full    rounded-md' src={val.movie_img} alt={val.movie_name} />
                                    <h2 className='  z-10 absolute top-[50%] left-[25%] bg-[#100f0faa] px-5 py-1 rounded-full text-white cursor-pointer'><span className='text-white'>▶</span> Trailer ( 5 )</h2>
                                </div>

                                <div className='text-white '>
                                    <h1 className='text-3xl font-bold hidden md:block'>{val.movie_name}</h1>
                                    <div className='flex gap-5 font-bold md:bg-[#444] bg-[#F2F5F9] items-center py-3  rounded my-5 pl-4 md:w-80 w-[95vw]  md:mt-3 mt-[42vh] '>
                                        <FaStar className='text-2xl text-[#f4842e] ' />
                                        <span className="text-black md:text-white">{val.votes}</span>
                                        <button className='bg-slate-50 px-2 py-1 rounded-md md:text-black text-[#EC5E71] border border-[#EC5E71]  md:border-none hover:bg-slate-200 '>Rate Now</button>
                                    </div>

                                    <h2 className=' hidden   md:visible md:block bg-slate-100 text-black font-bold w-20 px-4 py-1 rounded hover:bg-slate-200'>{val.language}</h2>

                                    <ul className='hidden  md:flex gap-2 mt-5'>
                                        <li className='text-xl'>{val.time}</li> :
                                        <li className='text-xl'>{val.Action_movie.type}</li> :
                                        <li className='text-xl'>{val.date}</li>
                                    </ul>

                                    <button className=' hidden md:block mt-8 w-40 py-2  bg-[#EC5E71] rounded-md font-semibold hover:bg-red-400 '>Book Now</button>
                                </div>

                            </div>


                            <div className='w-[1300px] mx-auto my-5 mt-20 md:mt-0'>
                                <h1 className='font-bold text-3xl mb-3 px-4 md:px-0'>About The Movie</h1>
                                {/* <p><span className='font-bold '>{val.name}</span> ek romanchak aur prabhavit karne wali film hai jo darshako ko shuru se lekar ant tak jode rakhti hai. Is film me kahani ke mod aur chhupi hui baatein kahani ko aur bhi rochak banati hain. Film ke pramukh kirdaron ki pradarshak kshamata aur kathin paristhitiyon mein unka sangharsh, ise aur bhi dilchasp banata hai. <span className='font-bold'>{val.name}</span> ka pratyek scene darshakon par gehra prabhav chhodta hai aur unhe sochne par majboor karta hai. Yah film na keval manoranjak hai balki dil ko chu lene wali bhi hai. Visheshkar unke liye jo <span className='font-bold'>{val.type}</span> mein ruchi rakhte hain, yah ek zaroori dekhne layak film hai.</p> */}
                                <p className=" w-[100vw] md:w-full px-4 md:mx-0">{val.about}</p>
                                <p className='bg-gray-500 h-[0.5px] mt-3 w-full'></p>


                                <h1 className='font-bold  text-2xl mt-5 px-4 md:px-0'>Cast/Actors</h1>
                                <div className='flex gap-8 mt-8 flex-col md:flex-row'>
                                    {
                                        val.actors.map((item) => {
                                            return (
                                                <div className='text-center flex md:flex-col '>
                                                    <img className='rounded-full border h-36 w-36' src={item.act_img} alt={item.act_name} />
                                                    <p className='font-bold md:my-2 md:ml-0 my-16 ml-4'>{item.act_name}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>



                            <h1 className=' hidden md:block font-bold ml-28 my-8 text-3xl'>Commnets</h1>
                            <div class="hidden md:block max-w-lg ml-28 border px-6 py-4 rounded-lg">
                                <div class="flex items-center mb-6">
                                    <img src="https://randomuser.me/api/portraits/men/97.jpg" alt="Avatar" class="w-12 h-12 rounded-full mr-4" />
                                    <div>
                                        <div class="text-lg font-medium text-gray-800">John Doe</div>
                                        <div class="text-gray-500">2 hours ago</div>
                                    </div>
                                </div>
                                <p class="text-lg leading-relaxed mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lorem
                                    nulla. Donec consequat urna a tortor sagittis lobortis.</p>
                                <div class="flex justify-between items-center">
                                    <div className='flex justify-center'>
                                        <p href="#" class="text-gray-500 hover:text-gray-700 mr-4 cursor-pointer"> <CiHeart className='text-2xl' /> Like</p>
                                        <p href="#" class="text-gray-500 hover:text-gray-700 cursor-pointer"><BsReply className='text-2xl' /> Reply</p>
                                    </div>
                                    <div class="flex items-center">
                                        <p href="#" class="text-gray-500 hover:text-gray-700 mr-4 cursor-pointer"><GoReport className='text-2xl ml-3' /> Report</p>
                                        <p href="#" class="text-gray-500 hover:text-gray-700 cursor-pointer"><IoShareOutline className='text-2xl ml-3' /> Share</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })
            }
        </div >
     </>
    )
};

export default OneMovieCard;
