import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main"
import SideBar from "./components/SideBar/SideBar"
import useApp from "./hooks/useApp"


function App() {

  const {showModal , handleToggleModal, data}  = useApp();
 
  return (
    <>
       {showModal && (<SideBar handleToggleModal={handleToggleModal} data={data} />)}
       {data ? (<Main data={data} />) : (<div className="loadingState"> <i className="fa-solid fa-gear"></i></div>)}
       {data && (<Footer handleToggleModal={handleToggleModal} data={data}/>)}
    </>
  )
}

export default App
