import { Button } from "@material-ui/core";
import {React,useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import CustomDivider from "../../../utils/Custom Divider/divider";
import styles from "../Style/Season_Offers.module.scss";
const Season_Offers = (props) => {
  const[groupTwo ,setGroupTwo] = useState()
  const[isLoading,setIsLoading] = useState(true)

  const baseStyle = { width: "90%", margin: "3rem auto" };

  const setValue = async(props)=>{
    setIsLoading(true)
    await setGroupTwo(props.groupTwo)
  }
  // offer
  const { push } = useHistory();
  const Handler = () => {
    push("offers");
  };

  useEffect(async()=>{
    await setValue(props)
    if(!groupTwo || groupTwo.length > 0){
      setIsLoading(false)
    }
  },[])

  return (
    <div style={baseStyle}>
      <div className={` ${styles.Season_Offers_header}`}>
        Season Offers
        <CustomDivider style={{ height: "1px", background: "#857250" }} />
      </div>
      <div className={styles.Season_Offers}>
        {!isLoading ? groupTwo.map((value,key)=>(
          <div 
            style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${value.image})`}} 
            className={`Season_Offers_Item Season_Offers_Item${key+1}`}>
            <div>
              <h2>{value.title}</h2>
              <Button onClick={Handler}>Button</Button>
            </div>
          </div>
        )):<span>Loading...</span>}
      </div>
      <style>
          {`
            .Season_Offers_Item{
             background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            }
            .Season_Offers_Item1 {
              grid-area: 1 / 1 / 3 / 2 !important;
              
            }
           .Season_Offers_Item2 {
              grid-area: 1 / 2 / 2 / 3 !important;
              
           }
          .Season_Offers_Item3{
            grid-area: 2 / 2 / 3 / 3 !important;
            } 
        `}
        </style>
    </div>
  );
};

export default Season_Offers;
