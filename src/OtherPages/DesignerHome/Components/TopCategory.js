import React, { useEffect } from "react";
import CustomDivider from "../../../utils/Custom Divider/divider";
import styles from "../Style/TopCategory.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { topCategories } from "../../../Redux/actions/designerHomePage";
import { Link } from "react-router-dom";

const TopCategory = () => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.root.topCategory);

  useEffect(() => {
    dispatch(topCategories({ slug: "womens-fashion" }));
  }, []);

  const filteredCategories = categories?.filter(
    ({ slug }) =>
      slug.toLowerCase() === "mens-fashion" ||
      slug.toLowerCase() === "womens-fashion" ||
      slug.toLowerCase() === "kids-fashion"
  );

  if(!filteredCategories){
    return null;
  }

  const baseStyle = {};
  return (
    <div className={styles.main}>
      <h1 className={styles.top_category_title}>Top Categories 2021</h1>
      <div className={styles.TopCategory}>
        <div className={styles.TopCategory_Items}>
          <h1 className="hidden_mobile">Top Categories 2021</h1>
        </div>
        {filteredCategories?.map(({ id, name, description, cover_image, categories, slug }) => (
          <CategoryItems
            key={id}
            heading={name}
            details={description}
            image={cover_image}
            categories={categories}
            slug={slug}
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