import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"


function App() {

  const [data , setData] = useState(null);
  const [ loading , setLoading] = useState(null)

  useEffect(()=>{
  
    async function fetAPIData(){

      const NAST_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NAST_KEY}`
      console.log(url)

      try{
       const res =  await fetch(url);
       const apiData = await res.json();
       setData(apiData)

      }catch(err){
        console.log(err.message)
      }
      
    }
    fetAPIData();
  },[])

  const [showModal , setShowModal] = useState(false);
  const handleToggleModal = ()=>{
    setShowModal(!showModal)
  }
  return (
    <>
       {showModal && (<SideBar handleToggleModal={handleToggleModal} />)}
       {data ? (<Main />) : (<div className="loadingState"> <i className="fa-solid fa-gear"></i></div>)}
       <Footer handleToggleModal={handleToggleModal}/>
    </>
  )
}

export default App
