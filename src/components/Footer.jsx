


const Footer = ({handleToggleModal})=>{
    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
               <h2>The Brutal Martain Landscape </h2>
               <h1>APOD PROJECT</h1>
            </div>
            <button>
             <i onClick={handleToggleModal} className="fa-solid fa-circle-info"></i>       
            </button>
        </footer>
    )

}
export default Footer;