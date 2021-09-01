import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import CustomDivider from "../../../utils/Custom Divider/divider";
import styles from "../Style/TopCategory.module.scss";
import Img1 from "../Images/img.png";
import { useDispatch, useSelector } from "react-redux";
import { topCategories } from "../../../Redux/actions/designerHomePage";

const TopCategory = () => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.root.topCategory);

  const MenDescription = [
    "Shirts",
    "Hoodies",
    "Jeans & Chinos",
    "T-shirts & Shorts",
    "Jackets & Sweatshirts",
    " Kurtas",
    "Casual Wear",
    " Formal Wear",
  ];
  const WomenDescription = [
    "Kurtas & Suits",
    "Ethinic Wear",
    " Kurtas & Tops",
    "Leggins & Salwars",
    "Sarees",
    "Dress Materials",
    "Jump Suits",
    "Shorts & Skirts",
  ];
  const KidsDescription = [
    "Track pants",
    "T-Shirts",
    "Shorts",
    "Hoodies",
    "Trousers",
    "Ethnic Wear",
    "Sweatshirts",
    "Jeans",
  ];

  useEffect(() => {
    dispatch(topCategories({ slug: "womens-fashion" }));
  }, []);

  const filteredCategories = categories.filter(
    ({ slug }) =>
      slug.toLowerCase() === "mens-fashion" ||
      slug.toLowerCase() === "womens-fashion" ||
      slug.toLowerCase() === "kids-fashion"
  );

  const baseStyle = {};
  return (
    <div style={baseStyle}>
      <h1 className={styles.top_category_title}>Top Category 2021</h1>
      <div className={styles.TopCategory}>
        <div className={styles.TopCategory_Items}>
          <h1 class="hidden_mobile">Top Category 2021</h1>
        </div>
        {filteredCategories?.map(({ id, name, description, cover_image }) => (
          <CategoryItems
            key={id}
            heading={name}
            details={description}
            image={cover_image}
          />
        ))}
        {/* <CategoryItems heading={"Men"} details={MenDescription} /> */}
        {/* <CategoryItems heading={"Women"} details={WomenDescription} />
        <CategoryItems heading={"Kids"} details={KidsDescription} /> */}
      </div>
    </div>
  );
};

export default TopCategory;
// const imageSrc =
//   "https://images.unsplash.com/photo-1585846416120-3a7354ed7d39?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN1aXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

const CategoryItems = ({ heading, details, image }) => {
  return (
    <>
      <div className={styles.TopCategory_Items}>
        <img src={Img1} alt="items" />
        <div className={styles.TopCategory_Items_Layer}>
          <div className={styles.TopCategory_Items_Layer_text}>
            <h2>
              {heading}
              <CustomDivider
                style={{
                  height: "1px",
                  background: "#fff",
                  marginleft: "-5px",
                }}
              />
            </h2>
            <p>
              {details}
              {/* {details.map((name) => (
                <>
                  {name}
                  <br />
                </>
              ))} */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
