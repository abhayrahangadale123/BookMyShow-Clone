

import React from 'react'
import "../../Cards/scoll_hid.css"

const   Laugher_Data = [
    {
        movie_img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNiBOb3Ygb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00131954-kfsqvpncqw-portrait.jpg",
        movie_name: "",
        Action_movie: ""
    },
    
    {
        movie_img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA2IERlYw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00316295-mrlfzkrlas-portrait.jpg",
        movie_name: "",
        Action_movie: ""
    },
    
    {
        movie_img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNiBOb3Ygb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00312421-mzmjfachrd-portrait.jpg",
        movie_name: "",
        Action_movie: ""
    },
    
    {
        movie_img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNiBOb3Ygb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00135711-eppyfgqmzv-portrait.jpg",
        movie_name: "",
        Action_movie: ""
    },
    
    {
        movie_img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNiBOb3Ygb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00135461-qwtgywhtju-portrait.jpg",
        movie_name: "",
        Action_movie: ""
    },
    
    {
        movie_img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNiBOb3Ygb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00373752-fezeeebtyn-portrait.jpg",
        movie_name: "",
        Action_movie: ""
    },
    
    {
        movie_img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA2IERlYw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00393085-smaucushqm-portrait.jpg",
        movie_name: "",
        Action_movie: ""
    },
    
    {
        movie_img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxMSBKYW4gb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00355125-kjfzzlbvvn-portrait.jpg",
        movie_name: "",
        Action_movie: ""
    },
    
    
   
   
];

function clickHandler(id) {
    navigate(`/movies/${id}`);
}



const  Laugher_card = () => {
    return (
        <div className=' max-w-[1300px] mx-auto mt-[-15px]'>
            <h1 className='mb-2 mt-14 ml-2  text-3xl font-bold text-[#333333] '>Laughter Therapy</h1>
            <div className='flex gap-8 overflow-auto mt-10 scoll_hid'>
                {
                      Laugher_Data.map((val, id) => {
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

export default  Laugher_card