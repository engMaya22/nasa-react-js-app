

const SideBar = ({handleToggleModal})=>{
    return <div className="sidebar">
              <div onClick={handleToggleModal} className="bgOverlay"></div>
              <div className="sidebarContents">
                <h2>The Brutal Martain Landscape </h2>
                <div>
                    <p>Description</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam cum praesentium sed architecto. Doloribus molestias quidem sit qui earum commodi distinctio in doloremque dolorum, totam dicta autem ratione maiores itaque?</p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>


           </div>

}
export default SideBar;