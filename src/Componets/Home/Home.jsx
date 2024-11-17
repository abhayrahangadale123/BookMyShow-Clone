import React from 'react'
//  import NavBar_One from '../Navbar_One/NavBar_One'
// import NavBar_Two from '../NavBar_Two/NavBar_Two'
// import Footer from '../Footer/Footer'
import Slaid_Bar from '../slaid_Bar/Slaid_Bar'
import Recommended from '../Recommended_Movies/Recommended'
import Benner from '../Benner/Benner'
import Live_Bar from '../Live_Bar/Live_Bar'
import Premiere from '../Premiere/Premiere'

import MUsic_Card from '../Cards/Music_Stdio/MUsic_Card'
import OuterDoor from '../Cards/OutDoor/OuterDoor'
import Laugher_card from '../Cards/Laughter_card/Laugher_card'
import Populer_card from '../Cards/Popular_card/Populer_card'
import Gaming_card from '../Cards/Gaming_card/Gaming_card'
import Treding_card from '../Treding_serching/Treding_card'
import Sing_up from '../Sign_up/Sing_up'
import Toggle_bar from '../Sign_up/Toggle_bar'



const Home = () => {
  return (
    <>
      {/* <NavBar_One/>
      <NavBar_Two/> */}
      <Sing_up/>
      <Toggle_bar/>
      <Slaid_Bar />
      <Recommended />
      <Benner />
      <Live_Bar />
      <Premiere />

      <MUsic_Card />
      <OuterDoor />
      <Laugher_card />
      <Populer_card />
      <Gaming_card />
      <Treding_card/>
      {/* <Footer/> */}

    </>
  )
}

export default Home