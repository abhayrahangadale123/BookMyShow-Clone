 import React from 'react'
import NavBar_One from './Componets/Navbar_One/NavBar_One'
import NavBar_Two from './Componets/NavBar_Two/NavBar_Two'
import Slaid_Bar from './Componets/slaid_Bar/Slaid_Bar'
import Recommended from './Componets/Recommended_Movies/Recommended'
import Benner from './Componets/Benner/Benner'
import Live_Bar from './Componets/Live_Bar/Live_Bar'
import Premiere from './Componets/Premiere/Premiere'
 
 
  
 const App = () => {
   return (
     <>
      <NavBar_One/>
      <NavBar_Two/>
      <Slaid_Bar/>
      <Recommended/>
      <Benner/>
      <Live_Bar/>
      <Premiere/>
    

     </>
   )
 }
 
 export default App