import React from 'react'
import Prem_btn from "../../assets/Prem_btn_red.avif"
const  Premiere_Data =[
    { 
        movie_img:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00413593-hbgnkzbhrv-portrait.jpg",
        movie_name: "Girl You Know It's True",
         
        movie_lang:"English"
      },
      
      { 
          movie_img:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00372199-pdugxvjlpg-portrait.jpg",
        movie_name: "Glassmaster",
       
        movie_lang:"Tamil"
      },
    
  ]

const Premiere = () => {
  return (
    <>
       <div className="">
        <img src={Prem_btn} alt="" />
        
       </div>
       <div className="">
       <h1 className="m-4 ml-36 text-2xl font-bold text-[#333333]">Premieres</h1>
       <p>Brand new relesses every Friday</p>
        <div className="">
            {
                Premiere_Data.map((val)=>{
                    <>
                  <img src={val.movie_img} alt="" />
                  <h1>{val.movie_name}</h1>
                  
                    </>
                })
            }
        </div>
       </div>
    </>
  )
}

export default Premiere