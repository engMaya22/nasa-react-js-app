import styles from "./styles.module.css"
const Footer = ({handleToggleModal ,data})=>{
    const {bgGradient  } = styles;
    return (
        <footer>
            <div className={bgGradient}></div>
            <div>
               <h1>APOD PROJECT</h1>
               <h2> {data?.title} </h2>
            </div>
            <button>
             <i onClick={handleToggleModal} className="fa-solid fa-circle-info"></i>       
            </button>
        </footer>
    )

}
export default Footer;