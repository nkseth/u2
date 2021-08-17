import {React,useState,useEffect} from "react";
import { Link } from "react-router-dom";
import CustomDivider from "../../../utils/Custom Divider/divider";
import styles from "../Style/PopularCategory.module.scss";
//TRBL
const PopularCategory = (props) => {
  const[groupOne,setgroupOne] = useState()
  const[isLoading,setIsLoading] = useState(true)
  const baseStyle = { width: "90%", margin: "1rem auto 3rem auto" };
  var image = 'https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121__340.jpg'

  const setGroup = async (props) =>{
    await setIsLoading(true)
    await setgroupOne(props.groupOne)  
    await setIsLoading(false)
  }

  useEffect( async ()=>{
    setGroup(props)
    if(!groupOne){
       await setIsLoading(true)
    }
  },[])
  return (
    <>
      <div style={baseStyle}>
        <div className={`${styles.PopularCategory_header}`}>
          Popular Category
          <CustomDivider style={{ height: "1px", background: "#857250" }} />
        </div>
        <div className={`${styles.Category} Category`}>
          {!isLoading ? groupOne.map((value,key)=>(
            <>
              <div style={{backgroundImage:`linear-gradient(transparent, #000) , url(${value.image})`}}  
                className={'Category_item Category_item'+(key+1) }>
                <Link to="designers-product-page">{value.title}</Link>
              </div>
             </> 
          )) : <span>Loading...</span>}
        </div>
      </div>
      <style>
          {`
            .Category_item{
                background-position: center !important;
                background-repeat: no-repeat !important;
                background-size: cover !important;
              }
          .Category_item1 {
            grid-area: 1 / 1 / 3 / 3;
            
          }
           .Category_item2 {
              grid-area: 3 / 3 / 5 / 5;
              
           }
           .Category_item3 {
              grid-area: 3 / 1 / 5 / 2;
              
           }
           .Category_item4 {
              grid-area: 3 / 2 / 5 / 3;
           }
           .Category_item5 {
              grid-area: 1 / 3 / 3 / 4;
           }
           .Category_item6 {
              grid-area:1 / 4 / 3 / 5;
           }
        `}
        </style>
    </>
  );
};

export default PopularCategory;
