import React, { useEffect } from "react";
import CustomDivider from "../../../utils/Custom Divider/divider";
import styles from "../Style/TopCategory.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LazyLoadingImg } from "../../../utils/LazyLoading";

const TopCategory = () => {
  const dispatch = useDispatch();

  const { category_grp } = useSelector((state) => state.root.main);
  // console.log(category_grp);
  const baseStyle = {};
  return (
    <div className={styles.main}>
      <h1 className={styles.top_category_title}>Top Categories 2021</h1>
      <div className={styles.TopCategory}>
        <div className={styles.TopCategory_Items}>
          <h1 className="hidden_mobile">Top Categories 2021</h1>
        </div>
        {category_grp.men && (
          <CategoryItems
            heading={category_grp.men?.name}
            details={category_grp.men?.description}
            image={category_grp.men?.cover_image}
            categories={category_grp.men?.categories}
            slug={category_grp.men?.slug}
          />
        )}
        {category_grp.women && (
          <CategoryItems
            heading={category_grp.women?.name}
            details={category_grp.women?.description}
            image={category_grp.women?.cover_image}
            categories={category_grp.women?.categories}
            slug={category_grp.women?.slug}
          />
        )}
        {category_grp.kids && (
          <CategoryItems
            heading={category_grp.kids?.name}
            details={category_grp.kids?.description}
            image={category_grp.kids?.cover_image}
            categories={category_grp.kids?.categories}
            slug={category_grp.kids?.slug}
          />
        )}
      </div>
    </div>
  );
};

export default TopCategory;

const CategoryItems = ({ heading, details, image, categories, slug }) => {
  return (
    <>
      <div className={styles.TopCategory_Items}>
        <LazyLoadingImg image={image} />
        {/* <img src={image} alt='items' /> */}

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
              <div></div>
            </h2>
            <div className={styles.hover}>
              {categories?.slice(0, 8).map((item) => (
                <Link
                  style={{ padding: "1rem 0" }}
                  key={item.id.toString()}
                  to={{ pathname: `/designers-product-page/${item.slug}` }}
                >
                  <p>{item.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
