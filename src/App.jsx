 import React from 'react'
import Home from './Componets/Home/Home'
import NavBar_One from './Componets/Navbar_One/NavBar_One'
import NavBar_Two from './Componets/NavBar_Two/NavBar_Two'
import { Route, Routes } from 'react-router-dom'
 
import Movies from './Componets/One_individualCard/Movies'
import OneMovieCard from './Componets/One_individualCard/OneMovieCard'
import Footer from './Componets/Footer/Footer'
 
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
     


      
     </Routes>
     <Footer/>
      
     
     </>
   )
 }
 
 export default App