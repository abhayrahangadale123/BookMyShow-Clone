

import React from 'react'
import "../../Cards/scoll_hid.css"

const   Gaming_Data = [
    {
        movie_img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNyBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00310955-sawkuexaxw-portrait.jpg",
        movie_name: "  Vande Mataram Virtual   ",
        Action_movie: "Your Place and your Time India"
    },
    {
        movie_img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNCBOb3Ygb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00408737-twgnmrhryz-portrait.jpg",
        movie_name: "   Tricolor Triumph Virtual Run ",
         Action_movie: "Your Place and your Time India"
    },
    {
        movie_img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMiBEZWMgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00400167-hwsahhygka-portrait.jpg",
        movie_name: " Run for the Ocean - Get Medal by Courier ",
         Action_movie: "Your Place and your Time India"
    },
    {
        movie_img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyOSBEZWMgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00418027-cpuxvufkbj-portrait.jpg",
        movie_name: "  Resolution Virtual Marathon  ",
         Action_movie: "Your Place and your Time India"
    },
    {
        movie_img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA4IERlYyBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00417593-czjcrnelda-portrait.jpg",
        movie_name: "  Fit India Challenge - Get  Wooden Trophy",
          Action_movie: "Your Place and your Time India"
    },
    {
        movie_img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA4IERlYw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00418430-sulmjxhrgq-portrait.jpg",
        movie_name: "   Chess Championship (Online) For All Age ",
         Action_movie: "Your Place and your Time India"
    },
    {
        movie_img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA3IERlYyBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00410843-rsukzyrvfx-portrait.jpg",
        movie_name: " CHENNAIYIN FC - ISL 2024/2025 ",
         Action_movie: "Your Place and your Time India"
    },
    {
        movie_img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCAzIERlYyBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00414460-stcxwalnkg-portrait.jpg",
        movie_name: " Pro Kabaddi League Season 11 - Pune ",
         Action_movie: "Your Place and your Time India"
    },
    
    {
        movie_img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCAzIERlYyBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00414457-yzsqpxlpwe-portrait.jpg",
        movie_name: "  Pro Kabaddi League Season 11 - 2024    ",
          Action_movie: "Your Place and your Time India"
    },
    
    
   
];

function clickHandler(id) {
    navigate(`/movies/${id}`);
}



const   Gaming_card = () => {
    return (
        <div className=' max-w-[1300px] mx-auto mt-[-15px]'>
            <h1 className='mb-2 mt-14 ml-2  text-3xl font-bold text-[#333333] '>Top Games & Sport Events</h1>
            <div className='flex gap-8 overflow-auto mt-10 scoll_hid'>
                {
                       Gaming_Data.map((val, id) => {
                        return (
                            <div className='h-[480px] pb-4 min-w-[250px] flex flex-col  rounded-lg overflow-hidden cursor-pointer transition-transform duration-200 hover:opacity-60 '
                                onClick={() => clickHandler(id)}

                            >
                                <img className='w-full h-[85%] object-cover' src={val.movie_img} alt={val.name} />
                                <h2 className=' font-semibold px-2 mt-2 text-xl'>{val.movie_name}</h2>
                                <p className='px-2 text-gray-600 '>{val.Action_movie}</p>
                            </div>
                        )
                    })
                }
            </div>


        </div>
    )
}

export default  Gaming_card