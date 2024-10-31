import styles from "./styles.module.css"
const Main =({data}) => {
    const {imgContainer , bgImage} = styles;
    return (
        <div className={imgContainer}> 
           <img  src={data?.hdurl} alt={data?.title || 'bg-img'} className={bgImage}/>
        </div>
    )

}
export default Main;