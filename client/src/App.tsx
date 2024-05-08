//import { useState } from 'react'
//import LeftNav from "./components/LeftNav"

import ButtonAppBar from "./components/navigation/TopNavBar";
import SideBarDrawer from "./components/navigation/SideBarDrawer";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <ButtonAppBar />
      <SideBarDrawer />
    </>
  )
}

export default App
