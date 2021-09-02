import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CustomDivider from "../../../utils/Custom Divider/divider";
import styles from "../Style/PopularCategory.module.scss";
import overlay from "../Images/p1.png";
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { popularCategories } from "../../../Redux/actions/designerHomePage";
//TRBL
=======
>>>>>>> 0c76b0f394c8c5c6fb527c305a1b72cbec9cebf1
//TRBL 
const PopularCategory = () => {
  const dispatch = useDispatch();
  const baseStyle = { padding: "5rem 3rem" };
  const { categories } = useSelector((state) => state.root.popularCategory);

  useEffect(() => {
    dispatch(popularCategories());
  }, []);

  console.log(categories)

  if (categories) {
    return (
      <>
        <div className={styles.popularcategory_content} style={baseStyle}>
          <div className={`${styles.PopularCategory_header}`}>
            Popular Categories
            <CustomDivider style={{ height: "1px", background: "#857250" }} />
          </div>
          <div className={`${styles.Category} Category`}>
            {/* {categories.map(({ description, title, image, id }, i) => {
            const classStyle = `Category_item${i}`;
            return (
              <div
                className={`${styles.Category_item1} Category_item`}
                key={id}
              >
                <img
                  src={image}
                  className={styles.divOverlayImg}
                  alt="dsadhsahjl"
                />

                <Link
                  style={{ zIndex: 10, fontFamily: "DM Serif Display" }}
                  to="designers-product-page"
                >
                  {title}
                </Link>
              </div>
            );
          })} */}

            <div className={`${styles.Category_item1} Category_item`} style={{ backgroundImage: "url(" + categories[0]?.image + ")" }} >
              <img
                src={overlay}
                className={styles.divOverlayImg}
                alt={categories[0]?.id}
              />

              <Link
                style={{ zIndex: 10, fontFamily: "DM Serif Display" }}
                to="designers-product-page"
              >
                {categories[0]?.title}
              </Link>
            </div>
            <div className={`${styles.Category_item2} Category_item`} style={{ backgroundImage: "url(" + categories[1]?.image + ")" }}>
              <img
                src={overlay}
                className={styles.divOverlayImg}
                alt={categories[1]?.id}
              />
              <Link
                style={{ zIndex: 10, fontFamily: "DM Serif Display" }}
                to="designers-product-page"
              >
                {categories[1]?.title}
              </Link>{" "}
            </div>
            <div className={`${styles.Category_item3} Category_item`} style={{ backgroundImage: "url(" + categories[2]?.image + ")" }}>
              <img
                src={overlay}
                className={styles.divOverlayImg}
                alt={categories[2]?.id}
              />
              <Link
                style={{ zIndex: 10, fontFamily: "DM Serif Display" }}
                to="designers-product-page"
              >
                {categories[2]?.title}
              </Link>
            </div>
            <div className={`${styles.Category_item4} Category_item`} style={{ backgroundImage: "url(" + categories[3]?.image + ")" }}>
              <img
                src={overlay}
                className={styles.divOverlayImg}
                alt={categories[3]?.id}
              />
              <Link
                style={{ zIndex: 10, fontFamily: "DM Serif Display" }}
                to="designers-product-page"
              >
                {categories[3]?.title}
              </Link>{" "}
            </div>
            <div className={`${styles.Category_item5} Category_item`} style={{ backgroundImage: "url(" + categories[2]?.image + ")" }}>
              <img
                src={overlay}
                className={styles.divOverlayImg}
                alt={categories[4]?.id}
              />
              <Link
                style={{ zIndex: 10, fontFamily: "DM Serif Display" }}
                to="designers-product-page"
              >
                {categories[4]?.title}
              </Link>{" "}
            </div>
            <div className={`${styles.Category_item6} Category_item`} style={{ backgroundImage: "url(" + categories[0]?.image + ")" }}>
              <img
                src={overlay}
                className={styles.divOverlayImg}
                alt={categories[5]?.id}
              />
              <Link
                style={{ zIndex: 10, fontFamily: "DM Serif Display" }}
                to="designers-product-page"
              >
                {categories[5]?.title}
              </Link>{" "}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return null
  }
};

export default PopularCategory;
