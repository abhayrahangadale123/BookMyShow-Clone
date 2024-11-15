import React, { useContext } from 'react'
import { Context } from '../Contex_Data/C_Data'
import "./Recommended.css"


const Recommended = () => {
  const { Recommended_Movies_Data } = useContext(Context)
  return (
    <>
  <h1 className=' m-4 ml-36 text-2xl font-bold text-[#333333]'>Recommended Movies </h1>
<div className="flex justify-center gap-8">
      {
        Recommended_Movies_Data.map((val) => (
          <>
            <div className="">

            <img src={val.movie_img} alt="" className='w-56 h-96 border rounded-xl relative ' />
            <div className="mt-1">

            <h1 className=' font-semibold text-xl'>{val.movie_name}</h1>
            <p className='text-[#928e8e]  '>{val.Action_movie}</p>
            </div>
            <div className="flex absolute bottom-[-153px] text-center bg-black text-white w-56  rounded-b-xl outline-none  h-10 ">

            <p className='mt-3 ml-1 px-1'>{val.like_btn}</p>
            
            <p className='mt-3 '>{val.like_name}</p>
            </div>
            </div>


          </>
        ))
      }
      </div>
    </>
  )
}

export default Recommended