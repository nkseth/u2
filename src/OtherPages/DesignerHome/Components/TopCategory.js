import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CustomDivider from "../../../utils/Custom Divider/divider";
import styles from "../Style/TopCategory.module.scss";
import Img1 from '../Images/img.png'
import common_axios from "../../../utils/axios.config";
import { Link } from "react-router-dom";



const TopCategory = () => {

  const [mens_data, set_mens_data] = useState([])
  const [womens_data, set_womens_data] = useState([])
  const [kids_data, set_kids_data] = useState([])

  useEffect(()=>{
   fetch_cat()
  },[])

  const fetch_cat = async () => {
     const { data: mens } = await common_axios.get('/category-subgrps/mens-fashion')
     const { data: kids } = await common_axios.get('/category-subgrps/kids-fashion')
     const { data: womens } = await common_axios.get('/category-subgrps/womens-fashion')

     if(mens.data){
        set_mens_data(mens.data)
     }

     if(womens.data){
      set_womens_data(womens.data)
     }

     if(kids.data){
       set_kids_data(kids.data)
     }
  }

  console.log(mens_data)

  const baseStyle = {};
  return (
    <div style={baseStyle}>
      <h1 className={styles.top_category_title}>Top Category 2021</h1>
      <div className={styles.TopCategory}>
        <div className={styles.TopCategory_Items}>
          <h1 class="hidden_mobile">Top Category 2021</h1>
        </div>
        <CategoryItems heading={"Men"} details={mens_data} />
        <CategoryItems heading={"Women"} details={womens_data} />
        <CategoryItems heading={"Kids"} details={kids_data} />
      </div>
    </div>
  );
};


export default TopCategory;
const imageSrc =
  "https://images.unsplash.com/photo-1585846416120-3a7354ed7d39?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN1aXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

const CategoryItems = ({ heading, details }) => {
  return (
    <>
      <div className={styles.TopCategory_Items}>
        <img src={details[0]?.cover_image || Img1} alt="items" />
        <div className={styles.TopCategory_Items_Layer}>
          <div className={styles.TopCategory_Items_Layer_text}>
            <h2>
              {heading}
              <CustomDivider style={{ height: "1px", background: "#fff", marginleft: "-5px" }} />
            </h2>
            <Link>
              {
                details[0]?.categories?.map(function (item) {
                  return (
                    <>
                      <p>{item.name}</p>
                    </>
                  )
                })

              }
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};