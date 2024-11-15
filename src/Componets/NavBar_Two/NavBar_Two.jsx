import React from 'react'

const NavBar_Two = () => {
  return (
    <>
     <nav className=" flex bg-[#F5F5F5] justify-evenly gap-80  py-2 text-sm">
      <div className="flex gap-5 mr-10 cursor-pointer">
        <p>Movies</p>
        <p>Stream</p>
        <p>Events</p>
        <p>Plays</p>
        <p>Sports</p>
        <p>Activities</p>
      </div>
      <div className="flex gap-5 cursor-pointer">
        <p>LIstYourShow</p>
        <p>Corporates</p>
        <p>Offers</p>
        <p>Gift Cards</p>
      </div>
     </nav>
    
    </>
  )
}

export default NavBar_Two