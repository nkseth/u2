import { Button } from "@material-ui/core";
import {React,useState,useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import CustomDivider from "../../../utils/Custom Divider/divider";
import styles from "../Style/Trending.module.scss";
const Trending = (props) => {

  const[trending , setTrending] = useState()
  const[isLoading , setIsLoading] = useState(true)
  const imageSrc =
    "https://images.unsplash.com/photo-1585846416120-3a7354ed7d39?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN1aXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
  const baseStyle = { padding: "3rem", background: " #e9e9e9" };

  const { push } = useLocation();

  const setTrendingValue = async(props) =>{
    await  setIsLoading(true)
    await setTrending(props.trending)
    await  setIsLoading(false)
  }

  useEffect(async()=>{
    await setTrendingValue(props)

  },[])

  return (
    <div style={baseStyle}>
      <div className={`${styles.Trending_header}`}>
        Trending
        <CustomDivider style={{ height: "1px", background: "#857250" }} />
      </div>
      <div className={styles.Trending}>
        {!isLoading  ? trending.map((value,key)=>(
          <div className={styles.Trending_Items}>
            <img src={value.cover_image} alt="items" />
            <Link to={"designers-product-page/"+value.name}>{value.name}</Link>
          </div>
        )):<span>Loading...</span>}
      </div>
      <div className={`${styles.Trending_Button}`}>
        <Button onClick={() => push("designers-product-page")}>View all</Button>
      </div>
    </div>
  );
};

export default Trending;
