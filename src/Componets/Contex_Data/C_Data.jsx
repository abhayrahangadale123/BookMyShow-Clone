import { createContext } from "react";


const Recommended_Movies_Data = [
  {
    movie_name: 'Vicky Aur Vidya',
    movie_img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny8xMCAgMjkuNEsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00395211-skkujsczwy-portrait.jpg',
    cover: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny8xMCAgMjkuNEsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00395211-skkujsczwy-portrait.jpg',
    Action_movie: 'Comedy/Drama/Period',
    about: 'Set in a quaint village, Vicky and Vidya find themselves entangled in a chaotic series of events when an unexpected video leaks. Hilarity ensues as they attempt to control the chaos and save their reputations.',
    language: 'Hindi',
    time: '2h 12m',
    date: '11 Oct 2022',
    votes: '7/10 (25.7k Votes)',
    actors: [
      { act_img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/rajkummar-rao-1043890-20-12-2017-03-34-28.jpg', act_name: 'Rajkumar Rao' },
      { act_img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tripti-dimri-1093177-01-06-2018-03-16-40.jpg', act_name: 'Tripti Dimri' },
      { act_img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vijay-raaz-2465-04-07-2018-12-40-58.jpg', act_name: 'Vijay Raz' },
      { act_img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/mallika-sherawat-1335-24-03-2017-17-58-54.jpg', act_name: 'Mallika Sherawat' },
      { act_img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/mast-ali-1412-1669786645.jpg', act_name: 'Mast Ali' },

    ]
  },
  {
    movie_name: 'Bhool Bhulaiyaa 3',
    movie_img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NzA1LjZLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00353996-qhqgafrfxu-portrait.jpg',
    cover: 'https://english.mathrubhumi.com/image/contentid/policy:1.9972752:1728471991/GZbyQR5asAETEKa.jfif?$p=7f870bb&f=16x10&w=852&q=0.8',
    Action_movie: 'Comedy/Horror',
    about: 'A young man faces supernatural occurrences in an old mansion as secrets from the past unravel. With humor and horror intertwined, he navigates ghostly apparitions and a mysterious curse to solve an age-old mystery.',
    language: 'Hindi',
    time: '2h 12m',
    date: '11 Nov 2019',
    votes: '7/10 (25.7k Votes)',
    actors: [
      { act_img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/kartik-aaryan-1045198-1685968467.jpg', act_name: 'Kartik Aryan' },
      { act_img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vidya-balan-2457-14-09-2017-12-33-54.jpg', act_name: 'Vidya Balan' },
      { act_img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tripti-dimri-1093177-01-06-2018-03-16-40.jpg', act_name: 'Tripti Dimri' },
      { act_img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/madhuri-dixit-1318-29-09-2016-01-48-46.jpg', act_name: 'Madhuri Dixit' },
      { act_img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/rajpal-yadav-1802-24-03-2017-12-33-13.jpg', act_name: 'Rajpal Yadav' }
    ]
  },
  {
    movie_name: 'Venom: The Last Dance',
    movie_img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC8xMCAgNDQuMUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00383474-meegdfjgax-portrait.jpg',
    cover: 'https://i.ytimg.com/vi/LIVg_UAfN0g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC-lWOay0TZ_ebJtd6hZ_Lzu_QFWA',
    Action_movie: 'Sci-Fi/Thriller',
    about: 'A skilled thief, who can infiltrate people’s dreams and steal secrets from their subconscious, is given a chance to have his past crimes forgiven. His mission: plant an idea in someone’s mind, but the task proves riskier than expected.',
    language: 'English',
    time: '2h 28m',
    date: '16 Jul 2010',
    votes: '8.8/10 (2.1M Votes)',
    actors: [
      { act_img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tom-hardy-8994-24-03-2017-12-37-04.jpg', act_name: 'Leonardo DiCaprio' },
      { act_img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/juno-temple-15557-24-03-2017-15-54-53.jpg', act_name: 'Juno Gordon-Levitt' },
      { act_img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/rhys-ifans-24003-24-03-2017-14-00-02.jpg', act_name: 'Ellen Page' },
      { act_img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/chiwetel-ejiofor-3505-24-03-2017-15-46-20.jpg', act_name: 'Tom Hardy' },
      { act_img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/peggy-lu-2037675-1717458960.jpg', act_name: 'Tom Hardy' }
    ]
  },
  {
    movie_name: '3 Idiots',
    movie_img: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/3-idiots-et00001611-1696834910.jpg',
    cover: 'https://i.ytimg.com/vi/is4ZkFNLnnk/maxresdefault.jpg',
    Action_movie: 'Comedy/Drama',
    about: 'Three college friends navigate the pressures of India’s intense education system while pursuing their dreams. Along the way, they redefine success, confront their fears, and learn invaluable life lessons in this comedic yet thought-provoking film.',
    language: 'Hindi',
    time: '2h 51m',
    date: '25 Dec 2009',
    votes: '8.4/10 (366k Votes)',
    actors: [
        { act_img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/aamir-khan-42-20-12-2017-04-51-55.jpg', act_name: 'Aamir Khan' },
        { act_img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/r-madhavan-6790-1657260233.jpg', act_name: 'R. Madhavan' },
        { act_img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sharman-joshi-2113-1710756117.jpg', act_name: 'Sharman Joshi' },
        { act_img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/kareena-kapoor-khan-1151-26-07-2018-11-14-31.jpg', act_name: 'Kareena Kapoor' },
        { act_img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/boman-irani-339-24-11-2017-07-48-52.jpg', act_name: 'Boman Irani' },
    ]
},
{
  movie_name: 'The Dark Knight',
  movie_img: 'https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-dark-knight-et00001549-17-03-2021-06-39-49.jpg',
    cover: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/09/the-dark-knight-poster-joker-harvey-two-face.jpg',
    Action_movie: 'Action/Crime/Drama',
    about: 'In Gotham City, Batman faces his greatest adversary, the Joker, who seeks to plunge the city into anarchy. With intense action and complex characters, the story explores the thin line between heroism and chaos.',
    language: 'English',
    time: '2h 32m',
    date: '18 Jul 2008',
    votes: '9.0/10 (2.7M Votes)',
    actors: [
        { act_img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/christian-bale-440-24-03-2017-12-31-22.jpg', act_name: 'Christian Bale' },
        { act_img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/heath-ledger-805-08-07-2020-02-43-56.jpg', act_name: 'Heath Ledger' },
        { act_img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/aaron-eckhart-2754-1667969179.jpg', act_name: 'Aaron Eckhart' },
        { act_img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/maggie-gyllenhaal-1321-24-03-2017-17-32-17.jpg', act_name: 'Maggie Gyllenhaal' }
    ]
}
];

const Live_Event_Data = [
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NCBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/workshop-and-more-web-collection-202211140440.png"
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NCBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/bmshp-desktop-kids-collection-202404190106.png"
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-OCBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/comedy-shows-collection-202211140440.png"
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-OCBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/music-shows-collection-202211140440.png"
  },

]


let Context = createContext();

function MyComponent({ children }) {
  return (
    <Context.Provider value={{ Recommended_Movies_Data, Live_Event_Data }}>
      {children}
    </Context.Provider>
  );
}

export { MyComponent, Context };
