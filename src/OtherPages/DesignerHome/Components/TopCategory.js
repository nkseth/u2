import React, { useEffect } from "react";
import CustomDivider from "../../../utils/Custom Divider/divider";
import styles from "../Style/TopCategory.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { topCategories } from "../../../Redux/actions/designerHomePage";
import { Link } from "react-router-dom";

const TopCategory = () => {
  const dispatch = useDispatch();

  const { category_grp } = useSelector((state) => state.root.main);

  // useEffect(() => {
  //   dispatch(topCategories({ slug: "womens-fashion" }));
  // }, []);

  // const filteredCategories = categories?.filter(
  //   ({ slug }) =>
  //     slug.toLowerCase() === "mens-fashion" ||
  //     slug.toLowerCase() === "womens-fashion" ||
  //     slug.toLowerCase() === "kids-fashion"
  // );

  // if(!filteredCategories){
  //   return null;
  // }

  const baseStyle = {};
  return (
    <div className={styles.main}>
      <h1 className={styles.top_category_title}>Top Categories 2021</h1>
      <div className={styles.TopCategory}>
        <div className={styles.TopCategory_Items}>
          <h1 className="hidden_mobile">Top Categories 2021</h1>
        </div>
          {category_grp.men && <CategoryItems
            heading={category_grp.men?.name}
            details={category_grp.men?.description}
            image={category_grp.men?.cover_image}
            categories={category_grp.men?.categories}
            slug={category_grp.men?.slug}
          />}
          {category_grp.women && <CategoryItems
            heading={category_grp.women?.name}
            details={category_grp.women?.description}
            image={category_grp.women?.cover_image}
            categories={category_grp.women?.categories}
            slug={category_grp.women?.slug}
          />}
          {category_grp.kids && <CategoryItems
            heading={category_grp.kids?.name}
            details={category_grp.kids?.description}
            image={category_grp.kids?.cover_image}
            categories={category_grp.kids?.categories}
            slug={category_grp.kids?.slug}
          />}
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

const CategoryItems = ({ heading, details, image, categories, slug }) => {
  return (
    <>
      <div className={styles.TopCategory_Items}>
        <img src={image} alt="items" />
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
              {/* {details} */}
              {categories?.map((item) => (
                <Link key={item.id.toString()} to={{ pathname:`/designers-product-page/${item.slug}` }}>
                  <p>
                  {item.name}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}