import { useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"


function App() {

  const [showModal , setShowModal] = useState(false);
  const handleToggleModal = ()=>{
    setShowModal(!showModal)
  }
  return (
    <>
       {showModal && (<SideBar handleToggleModal={handleToggleModal} />)}
       <Main />
       <Footer handleToggleModal={handleToggleModal}/>
    </>
  )
}

export default App
