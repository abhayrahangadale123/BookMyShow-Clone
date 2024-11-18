import React from 'react'
import Prem_btn from "../../assets/Prem_btn_red.avif"
const Premiere_Data = [
  {
    movie_img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00413593-hbgnkzbhrv-portrait.jpg",
    movie_name: "Girl You Know It's True",

    movie_lang: "English"
  },

  {
    movie_img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00372199-pdugxvjlpg-portrait.jpg",
    movie_name: "Glassmaster",

    movie_lang: "Tamil"
  },
  {
    movie_img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00352820-luzahbmjhc-portrait.jpg",
    movie_name: "Joker:Folie a Deux",

    movie_lang: "English"
  },
  {
    movie_img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00418060-vdbbupdrnk-portrait.jpg",
    movie_name: "Joker:Folie a Deux",
   movies_prev:"(Preview)",
    movie_lang: "English"
  },
  {
    movie_img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00419600-lhnasauuun-portrait.jpg",
    movie_name: "Joker:2 Flim Collection",

    movie_lang: "English"
  },

]

const Premiere = () => {
  return (
    <>
      <div className="bg-[#2B3149]">


        <div className="mt-14 m-auto  ml-2 md:ml-36  overflow-x-hidden">
          <img src={Prem_btn} alt="" className="px-4 md:px-0 " />

        </div>
        <div className="md:mt-8 mt-3">
          <h1 className=" px-4 md:px-0  font-sans ml-2 md:ml-36 text-2xl font-bold text-white">Premieres</h1>
          <p className='  px-4 md:px-0 font-sans  ml-2 md:ml-36 text-white'>Brand new relesses every Friday</p>
          {/* <div className="flex justify-center gap-8   overflow-scroll md:overflow-hidden"> */}
            <div className="flex   gap-8 overflow-scroll px-4 md:px-0 md:ml-36 md:overflow-hidden">
            {
              Premiere_Data.map((val) => (
                <>
                  <div className="">

                    <img src={val.movie_img} alt="" className=' w-56 h-80  rounded-xl relative ' />
                    <div className="mt-1">

                      <h1 className='text-white font-sans font-semibold text-sm md:text-xl w-56'>{val.movie_name}</h1>
                      <h1 className='text-white font-sans font-semibold text-xl'>{val.movies_prev}</h1>
                      
                      <p className='text-white'>{val.movie_lang}</p>
                    </div>

                  </div>


                </>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Premiere