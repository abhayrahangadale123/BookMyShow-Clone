import React, { useContext } from 'react'
import { Context } from '../Contex_Data/C_Data'

const Live_Bar = () => {
     const {Live_Event_Data} = useContext(Context)
  return (
    <>
    <div className="">

    <h1 className="m-4 ml-36 text-2xl font-bold text-[#333333]">The Best Of Live Events</h1>
    <div className="flex ml-36 gap-8 ">

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