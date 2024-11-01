import styles from "./styles.module.css"

const SideBar = ({handleToggleModal , data})=>{

    const {sidebar , bgOverlay , sidebarContents ,
         descriptionTitle, descriptionContainer} = styles;
    return <div className={sidebar}>
              <div onClick={handleToggleModal} className={bgOverlay}></div>
              <div className={sidebarContents}>
                <h2>{data?.title} </h2>
                <div>
                    <p className={descriptionTitle}>{data?.date}</p>
                    <p className={descriptionContainer}>{data?.explanation}</p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>


           </div>

}
export default SideBar;