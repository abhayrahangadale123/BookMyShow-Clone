 import React from 'react'
import Home from './Componets/Home/Home'
import NavBar_One from './Componets/Navbar_One/NavBar_One'
import NavBar_Two from './Componets/NavBar_Two/NavBar_Two'
import { Route, Router, Routes } from 'react-router-dom'
 
import Movies from './Componets/One_individualCard/Movies'
import OneMovieCard from './Componets/One_individualCard/OneMovieCard'
import Footer from './Componets/Footer/Footer'
import Music from './Componets/One_individualCard/Music'
import Event from './Componets/One_individualCard/Event'
import Plays from './Componets/One_individualCard/Plays'
import Sports from './Componets/One_individualCard/Sports'
import Activities from './Componets/One_individualCard/Activities'
 
 const App = () => {
   return (
     <>
     <NavBar_One/>
     <NavBar_Two/>
      
     <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/home"  element={<Home/>}/>
      <Route path="/Movies_Jabalpur"  element={<Movies/>}/>
      <Route path="/Movies_Jabalpur/:id"  element={<OneMovieCard/>}/>
      <Route path="/Music_Jabalpur" element={<Music/>}></Route>
      <Route path="/Event_Jabalpur" element={<Event/>}></Route>
      <Route path="/Play_Jabalpur" element={<Plays/>}></Route>
      <Route path="/Sport_Jabalpur" element={<Sports/>}></Route>
      <Route path="/Activities_Jabalpur" element={<Activities/>}></Route>
     


      
     </Routes>
     <Footer/>
      
     
     </>
   )
 }
 
 export default App