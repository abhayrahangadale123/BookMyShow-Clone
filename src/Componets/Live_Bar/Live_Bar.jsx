import React, { useContext } from 'react'
import { Context } from '../Contex_Data/C_Data'

const Live_Bar = () => {
     const {Live_Event_Data} = useContext(Context)
  return (
    <>
    <div className="">

    <h1 className="m-4   text-xl font-bold text-[#333333] md:ml-40 md:text-2xl">The Best Of Live Events</h1>
    <div className="flex   gap-8 overflow-scroll px-4 md:px-0 md:ml-36 md:overflow-hidden">

    {
        Live_Event_Data.map((val)=>(
            <img src={val.img} alt="" className="rounded-lg w-56 h-56" />
        ))
    }
    </div>
    
    </div>
    </>
    
  )
}

export default Live_Bar