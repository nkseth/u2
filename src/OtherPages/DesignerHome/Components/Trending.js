import { Button, useMediaQuery } from "@material-ui/core";
import { Crop32Rounded, Crop32Sharp } from "@material-ui/icons";
import React, { useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import CustomDivider from "../../../utils/Custom Divider/divider";
import styles from "../Style/Trending.module.scss";
import { topTrending } from "../../../Redux/actions/designerHomePage";
import { useDispatch, useSelector } from "react-redux";

const Trending = () => {
  const dispatch = useDispatch();
  const imageSrc =
    "https://images.unsplash.com/photo-1585846416120-3a7354ed7d39?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN1aXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
  const baseStyle = {
    padding: "5rem 3rem",
    background: "  #F3F1EE",
    maginTop: "-3em",
  };

  // const { push } = useLocation();
  const { push } = useHistory();
  const mobileView = useMediaQuery("(max-width:1024px)");

  const { items } = useSelector((state) => state.root.trending);

  useEffect(async () => {
    dispatch(topTrending());
  }, []);

  if (items) {
    return (
      <div className={styles.trending_content} style={baseStyle}>
        <div
          className={`${styles.Trending_header}`}
          style={{ color: "#1A202C" }}
        >
          Trending
          <CustomDivider style={{ height: "1px", background: "#857250" }} />
        </div>
        <div className={styles.Trending}>
          {items?.map((item) => (
            <Link
              to="designers-product-page"
              to={{ pathname: `/designers-product-page/${item.slug}` }}
            >
              <div key={item.name} className={styles.Trending_Items}>
                <img src={item.cover_image} alt={item.name} />
                <div>
                  {item.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className={`${styles.Trending_Button}`}>
          <Link to="/designers-product-page/blazers-and-coats">
            <Button>View all</Button>
          </Link>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Trending;
