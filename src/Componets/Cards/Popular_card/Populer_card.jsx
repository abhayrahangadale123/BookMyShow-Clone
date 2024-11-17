

import React from 'react'
import "../../Cards/scoll_hid.css"

const   Populer_Data = [
    {
        movie_img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAzMCBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00412541-uhugfwxscq-portrait.jpg",
        movie_name: "Piyush Mishra - Udankatola Tour -Indore",
        Action_movie: " the Park : Indore "
    },
    {
        movie_img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCAyNiBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00413227-lncqqpjpxe-portrait.jpg",
        movie_name: "Kids Chess Championship",
        Action_movie: " Your Place and Your Time : India"
    },
    {
        movie_img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNyBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00367500-nuhfdgflqc-portrait.jpg",
        movie_name: " Solve Rubik Cube In 6 Steps! ",
        Action_movie: " happy Skills Events : Ghatkopar"
    },
    {
        movie_img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyOSBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00136442-kuvahlaeqt-portrait.jpg",
        movie_name: " Reema Swad Cooking Classes ",
        Action_movie: " Multiple venues "
    },
    {
        movie_img:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA4IE1hciBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409511-tlsbwzbnhl-portrait.jpg",
         movie_name: "  Lollapalooza india 2025 ",
        Action_movie: " Mahalaxmi race Course : Mumbai Concert "
    },
    {
        movie_img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA2IERlYw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00393085-smaucushqm-portrait.jpg",
        movie_name: "Dropout ft.Haseed Khan",
        Action_movie: " Jaamun: Jabalpur"
    },
    {
        movie_img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCAxOSBOb3Ygb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00131537-ahfahehfgm-portrait.jpg",
        movie_name: " Magic Beans Online Kids  ",
        Action_movie: "  Multiple venues "
    },
    
   
   
    
   
];

function clickHandler(id) {
    navigate(`/movies/${id}`);
}



const   Populer_card = () => {
    return (
        <div className=' max-w-[1300px] mx-auto mt-[-15px]'>
            <h1 className='mb-2 mt-14 ml-2  text-3xl font-bold text-[#333333] '>Populer Events</h1>
            <div className='flex gap-8 overflow-auto mt-10 scoll_hid'>
                {
                      Populer_Data.map((val, id) => {
                        return (
                            <div className='h-[480px] pb-4 min-w-[250px] flex flex-col  rounded-lg overflow-hidden cursor-pointer transition-transform duration-200 hover:opacity-60 '
                                onClick={() => clickHandler(id)}

                            >
                                <img className='w-full h-[85%] object-cover' src={val.movie_img} alt={val.name} />
                                <h2 className='font-bold px-2 mt-2 text-xl'>{val.movie_name}</h2>
                                <p className='px-2 text-gray-600 '>{val.Action_movie}</p>
                            </div>
                        )
                    })
                }
            </div>


        </div>
    )
}

export default  Populer_card