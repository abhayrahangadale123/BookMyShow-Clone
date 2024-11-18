import React from 'react'
// import "./scoll_hid.css"
import "../../Cards/scoll_hid.css"

const Music_Data = [
    {
        movie_img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAzMCBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00412541-uhugfwxscq-portrait.jpg",
        movie_name: "Gladiator II",
        Action_movie: "Action/Adventure/Drama"
    },
    {
        movie_img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNiBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00410180-blqzbnfyda-portrait.jpg",
        movie_name: "Kanguva",
        Action_movie: "Action/Adventure/Period"
    },
    {
        movie_img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMyBOb3Ygb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00406791-xxudugpjbt-portrait.jpg",
        movie_name: "Bhool Bhulaiyaa",
        Action_movie: "Comedy/Horror"
    },
    {
        movie_img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA4IE1hciBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409511-tlsbwzbnhl-portrait.jpg",
         movie_name: "Singham Again",
        Action_movie: "Action/Drama"
    },
    {
         movie_img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA2IERlYw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00418508-nfrszpqsng-portrait.jpg",
         movie_name: "The Sabarmati Report",
        Action_movie: "Drama/Historical"
    },
    {
         movie_img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCAzIERlYw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00417872-ugppwdzcym-portrait.jpg",
         movie_name: "Bhool Bhulaiyaa",
        Action_movie: "Comedy/Horror"
    },
  
    {
         movie_img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNSBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00419733-hpmrmhcbkc-portrait.jpg",
         movie_name: "The Sabarmati Report",
        Action_movie: "Drama/Historical"
    },
   
   
];

function clickHandler(id) {
    navigate(`/Movies_Jabalpur/${id}`);
}



const MUsic_Card = () => {
    return (
        <div className=' max-w-[1300px] mx-auto mt-[-15px]'>
            <h1 className='mb-2 mt-14 ml-2  text-3xl font-bold text-[#333333]'>Your Music Stdio</h1>
            <div className='flex gap-8 overflow-auto mt-10 scoll_hid md:px-0 px-4'>
                {
                     Music_Data.map((val, id) => {
                        return (
                            <div className='h-[480px] pb-4 min-w-[250px] flex flex-col  rounded-lg overflow-hidden cursor-pointer transition-transform duration-200 hover:opacity-60 '
                                onClick={() => clickHandler(id)}

                            >
                                <img className='w-full h-[85%] object-cover ' src={val.movie_img} alt={val.name} />
                                <h2 className='font-bold px-2 mt-2 text-xl'>{val.movie_name}</h2>
                                <p className='px-2 text-gray-600'>{val.Action_movie}</p>
                            </div>
                        )
                    })
                }
            </div>


        </div>
    )
}

export default MUsic_Card