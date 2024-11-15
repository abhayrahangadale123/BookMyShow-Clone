import { createContext } from "react";
 

const Recommended_Movies_Data = [
    { 
      movie_img:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/gladiator-ii-et00413291-1728536345.jpg",
      movie_name: "Gladiator II",
      like_btn:"❤️",
      like_name:"40.4k Likes",
      Action_movie:"Action/Adventure/Drama"
    },
    
    { 
        movie_img:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kanguva-et00357490-1711005979.jpg",
      movie_name: "Kanguva",
      like_btn:"❤️",
      like_name:"27.4k Likes",
      Action_movie:"Action/Adventure/paeriod"
    },
    
    {
        movie_img:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/bhool-bhulaiyaa-3-et00353996-1728474428.jpg",
      movie_name: "Bhool Bhulaiyaa",
      like_btn:"🤞",
      like_name:"167.4k Likes",
      Action_movie:"Comedy/Horror"
    },
    
    {
        movie_img:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/singham-again-et00354858-1728569759.jpg",
      movie_name: "Singham Again",
      like_btn:"🤞",
      like_name:"145.4k Likes",
      Action_movie:"Action/Drama"
    },
    {
        movie_img:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-sabarmati-report-et00383800-1730284391.jpg",
      movie_name: "The Sabarmati Report",
      like_btn:"❤️",
      like_name:"22.4k Likes",
      Action_movie:"Drama/Historical"
    },
    
  ];
  
  const Live_Event_Data =[
    {
      img:"https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NCBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/workshop-and-more-web-collection-202211140440.png"
    },
    {
      img:"https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NCBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/bmshp-desktop-kids-collection-202404190106.png"
    },
    {
      img:"https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-OCBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/comedy-shows-collection-202211140440.png"
    },
    {
      img:"https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-OCBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/music-shows-collection-202211140440.png"
    },
    
  ]
 

let Context = createContext();

function  MyComponent({ children }) {
    return (
        <Context.Provider value={{ Recommended_Movies_Data ,Live_Event_Data }}>
            {children}
        </Context.Provider>
    );
}

export {  MyComponent, Context };
