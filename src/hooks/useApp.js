
import { useEffect, useState } from "react"

const useApp = ()=>{
    const [data , setData] = useState(null);
  
    useEffect(()=>{
    
      async function fetAPIData(){
        const NAST_KEY = import.meta.env.VITE_NASA_API_KEY
        const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NAST_KEY}`
        
        //cash data
        const today = (new Date()).toDateString();
        const localKey = `NASA-${today}`;
        if(localStorage.getItem(localKey)){
          const apiData = JSON.parse(localStorage.getItem(localKey))
          setData(apiData)
          console.log('fetch from cash')
          return;
        }
        localStorage.clear();
  
  
        try{
         const res =  await fetch(url);
         const apiData = await res.json();
         localStorage.setItem(localKey , JSON.stringify(apiData))
         setData(apiData)
         console.log('fetch from api')
  
         console.log(data)
  
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

    return {
        showModal ,
        handleToggleModal,
        data,
        
    }
}
export default useApp;