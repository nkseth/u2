import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CustomDivider from "../../../utils/Custom Divider/divider";
import styles from "../Style/PopularCategory.module.scss";
import overlay from "../Images/p1.png";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { popularCategories } from "../../../Redux/actions/designerHomePage";
import "../Style/common.scss";
import { LazyLoadingComp } from "../../../utils/LazyLoading/index";

//TRBL
//TRBL
const PopularCategory = () => {
  const dispatch = useDispatch();
  const baseStyle = { padding: "5rem 3rem" };
  const { categories } = useSelector((state) => state.root.popularCategory);
  console.log(categories);
  useEffect(() => {
    dispatch(popularCategories());
  }, []);
  const history = useHistory();

  return (
    <div className={styles.popularcategory_content} style={baseStyle}>
      <div className={`${styles.PopularCategory_header}`}>
        Popular Categories
        <CustomDivider style={{ height: "1px", background: "#857250" }} />
      </div>
      <div className={`${styles.Category} Category`}>
        {categories?.slice(0, 6).map((category, i) => {
          return (
            <div
              onClick={() =>
                history.push(`/designers-product-page/${category.link}`)
              }
              className={`${styles.Category_item}   Category_item-${i}`}
              style={{
                backgroundImage: "url(" + category?.image + ")",
              }}
            >
              <img
                src={overlay}
                className={styles.divOverlayImg}
                alt={category?.id}
              />

              <Link
                style={{ zIndex: 10, fontFamily: "DM Serif Display" }}
                to={category.link ? category.link : ""}
              >
                {category?.title}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularCategory;
