import React from "react";
import CustomDivider from "../../../utils/Custom Divider/divider";
import styles from "../Style/TopCategory.module.scss";
import Img1 from '../Images/TOPCAT1.jpg'
import Img2 from '../Images/TOPCAT2.jpg'
import Img3 from '../Images/TOPCAT3.jpg'



const TopCategory = () => {

  const MenDescription = ['Shirts', 'Hoodies', 'Jeans & Chinos', 'T-shirts & Shorts', 'Jackets & Sweatshirts', ' Kurtas', 'Casual Wear', ' Formal Wear']
  const WomenDescription = ['Kurtas & Suits', 'Ethinic Wear', ' Kurtas & Tops', 'Leggins & Salwars', 'Sarees', 'Dress Materials', 'Jump Suits', 'Shorts & Skirts']
  const KidsDescription = ['Track pants', 'T-Shirts', 'Shorts', 'Hoodies', 'Trousers', 'Ethnic Wear', 'Sweatshirts', 'Jeans']


  const baseStyle = {};
  return (
    <div style={baseStyle}>
      <h1 className={styles.top_category_title}>Top Category 2021</h1>
      <div className={styles.TopCategory}>
        <div className={styles.TopCategory_Items}>
          <h1 className="hidden_mobile">Top Category 2021</h1>
        </div>
        <CategoryItems heading={"Men"} details={MenDescription} img={Img1} />
        <CategoryItems heading={"Women"} details={WomenDescription} img={Img2} />
        <CategoryItems heading={"Kids"} details={KidsDescription} img={Img3} />
      </div>
    </div>
  );
};


export default TopCategory;
const imageSrc =
  "https://images.unsplash.com/photo-1585846416120-3a7354ed7d39?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN1aXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

const CategoryItems = ({ heading, details, img }) => {
  return (
    <>
      <div className={styles.TopCategory_Items}>
        <img src={img} alt="items" />
        <div className={styles.TopCategory_Items_Layer}>
          <div className={styles.TopCategory_Items_Layer_text}>
            <h2>
              {heading}
              <CustomDivider style={{ height: "1px", background: "#fff", marginleft: "-5px" }} />
            </h2>
            <p>
              {
                details.map(function (index, name) {
                  return (
                    <>
                      {details[name]}
                      <br />
                    </>
                  )
                })

              }
            </p>
          </div>
        </div>
      </div>
    </>
  );
};