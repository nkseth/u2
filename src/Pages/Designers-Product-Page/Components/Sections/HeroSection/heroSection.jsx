import {React,useState,useEffect} from "react";
import styles from "./hero.module.scss";

 function HeroSection(props) {

  const[details,setDtails] = useState({
    cover_image:'https://s3-alpha-sig.figma.com/img/3cfe/7847/10e6b7a4af64070aefb561b25de176c7?Expires=1627862400&Signature=WzjoRoAut1uz3OA6EHSR8KPubx8ruzVopbFxXXBw1Ajh~6ntGZ1iE7Gr9Z9RkrNelbzqc-aETQP-dd8rjQolUqfOBGCsQ~jntgro1dZ3ye3ya9EvLnXxSjJDBuc9PyL-W-e-AbrVLkVMpgZwREdX~NICgxbqcOFBLTTI0IHr~lk3hwxe7v9lE~D-BphWAeOzkQjEwM7NzHvZhD7JKjqYyM9Y4qkonZ~Ahk7gdZQe4HQEWC4xZxiecHY7c0mLh8~mGtu6CcRC2CkrESGEZ9PAax-kTiUrH~B1WRDsgAxa6b9pKLWNIW8mUbaJx7zUDJSdCFTRU7x6~r5ft1GtvtJlhg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    name:'1',
    description:'1'
  })
  const[isLoading,setIsLoading] = useState(true)
  
  const setValue = async(props)=>{
    await setIsLoading(true)
    await setDtails(props.category)      
    await setIsLoading(false)
  } 
  useEffect(async()=>{
    await setValue(props)
  },[])
  
  const img =
    "https://s3-alpha-sig.figma.com/img/3cfe/7847/10e6b7a4af64070aefb561b25de176c7?Expires=1627862400&Signature=WzjoRoAut1uz3OA6EHSR8KPubx8ruzVopbFxXXBw1Ajh~6ntGZ1iE7Gr9Z9RkrNelbzqc-aETQP-dd8rjQolUqfOBGCsQ~jntgro1dZ3ye3ya9EvLnXxSjJDBuc9PyL-W-e-AbrVLkVMpgZwREdX~NICgxbqcOFBLTTI0IHr~lk3hwxe7v9lE~D-BphWAeOzkQjEwM7NzHvZhD7JKjqYyM9Y4qkonZ~Ahk7gdZQe4HQEWC4xZxiecHY7c0mLh8~mGtu6CcRC2CkrESGEZ9PAax-kTiUrH~B1WRDsgAxa6b9pKLWNIW8mUbaJx7zUDJSdCFTRU7x6~r5ft1GtvtJlhg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";
  return (
    <>
      {isLoading ? <span>Loading...</span>:
        <div className={styles.mainContainer}>
          <div className={styles.container}>
            <div className={styles.imgContainer}>
              <img src={details.cover_image} alt='design' />
            </div>
            <div className={styles.detailsDiv}>
              <span>{details.name}</span>
              <br />
              <span>
                {details.description}
              </span>
            </div>
          </div>
        </div>
      }
    </>  
  );
}

export default HeroSection;
