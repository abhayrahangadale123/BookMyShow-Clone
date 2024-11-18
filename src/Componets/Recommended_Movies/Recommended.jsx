// import React, { useContext } from 'react'
// import { Context } from '../Contex_Data/C_Data'

// import { useNavigate } from 'react-router-dom'


// const Recommended = () => {
//   const { Recommended_Movies_Data } = useContext(Context)
//   let navigate = useNavigate();
//   function clickHandler(id) {
//       navigate(`/Movies_Jabalpur/:${id}`);
//   }
//   return (
//     <>
//       <h1 className='m-4 md:ml-36 text-2xl font-bold text-[#333333]'>Recommended Movies </h1>
//       <div className=" overflow-scroll md:overflow-hidden flex justify-center gap-8">
//         {
//           Recommended_Movies_Data.map((val,id) => (
//             <>
//               <div onClick={()=>clickHandler(id)} className="cursor-pointer">

//                 <img src={val.movie_img} alt="" className=' w-44 h-44 md:w-56 md:h-96 border rounded-xl relative ' />
//                 <div className="mt-1">

//                   <h1 className=' font-semibold text-xl'>{val.movie_name}</h1>
//                   <p className='text-[#928e8e]  '>{val.Action_movie}</p>
//                 </div>
                
//               </div>


//             </>
//           ))
//         }
//       </div>
//     </>
//   )
// }

// export default Recommended


import React, { useContext } from 'react';
import { Context } from '../Contex_Data/C_Data';
import { useNavigate } from 'react-router-dom';

const Recommended = () => {
  const { Recommended_Movies_Data } = useContext(Context);
  const navigate = useNavigate();

  function clickHandler(id) {
    navigate(`/Movies_Jabalpur/${id}`); // Removed ':' for proper URL structure
  }

  return (
    <>
      {/* Heading */}
      <h1 className="m-4   text-xl font-bold text-[#333333] md:ml-44 md:text-2xl">
        Recommended Movies
      </h1>

      {/* Movies Container */}
      <div className="flex gap-4 overflow-x-scroll px-4 md:overflow-hidden md:justify-center">
        {Recommended_Movies_Data.map((movie, id) => (
          <div
            key={id}
            onClick={() => clickHandler(id)}
            className="cursor-pointer flex-shrink-0"
          >
            {/* Movie Image */}
            <img
              src={movie.movie_img}
              alt={`Poster of ${movie.movie_name}`}
              className="w-36 h-48 border rounded-lg md:w-56 md:h-96"
            />

            {/* Movie Details */}
            <div className="mt-2 text-center md:text-left">
              <h1 className="font-semibold text-sm md:text-lg">
                {movie.movie_name}
              </h1>
              <p className="text-xs text-[#928e8e] md:text-sm">
                {movie.Action_movie}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Recommended;
