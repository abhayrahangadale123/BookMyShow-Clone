import React from 'react'
import { Link } from 'react-router-dom'

const NavBar_Two = () => {
  return (
    <>
      <nav className=" overflow-scroll md:overflow-hidden flex bg-[#F5F5F5] justify-evenly md:gap-80  py-2 text-sm">
        <div className="flex gap-5 mr-10 cursor-pointer">
          <Link to="/Movies_Jabalpur">
            <p>Movies</p>
          </Link>
          <Link to="/Music_Jabalpur">
            <p>Music</p>
          </Link>
          <Link to="/Event_Jabalpur">
            <p>Events</p>
          </Link>
          <Link to="/Play_Jabalpur">
            <p>Plays</p>
          </Link>
          <Link to="/Sport_Jabalpur">
            <p>Sports</p>
          </Link>
          <Link to="/Activities_Jabalpur">
            <p>Activities</p>
          </Link>
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