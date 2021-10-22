import React, { useEffect } from "react";
import { Grid, useMediaQuery } from "@material-ui/core";
import CustomSection from "../../../../../utils/Custom Section/section";
import TopOffersCard from "./components/offers-card/card";
import styles from "./allThatYouWant.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//Images
import All1 from "./components/Images/All1.jpg";
import All2 from "./components/Images/All2.jpg";
import All3 from "./components/Images/All3.jpg";
import { get_all_that_you_want } from "../../../../../Redux/actions/mensWear";
import { LazyLoadingImg } from "../../../../../utils/LazyLoading";

export default function AllThatYouWantSection({ type }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_all_that_you_want(type, 3));
  }, [type, dispatch]);

  const { all_that_you_want } = useSelector((state) => state.root.main);

  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const arr = [
    {
      title: "Shirts & Trousers Designers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique adipiscing.",
      image: All1,
    },
    {
      title: "Shirts & Trousers Designers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique adipiscing.",
      image: All2,
    },
    {
      title: "Shirts & Trousers Designers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique adipiscing.",
      image: All3,
    },
  ];
  return (
    <CustomSection
      style={{
        paddingBottom: mobileView ? "40px" : "84px",
        paddingTop: mobileView ? "30px" : "84px",
        background: "rgba(206, 199, 185, 0.2)",
      }}
    >
      <div className={styles.header}>
        <p style={{ color: "#0a0a0a" }}>
          <span>All</span>&nbsp;&nbsp;
          <span>That You Want</span>
        </p>
        <p>Under a budget &amp; Top offers</p>
      </div>
      {/* <div className={styles.topOffersCardContainer}>
        {all_that_you_want?.map((item) => (
          <TopOffersCard
            title={item.title}
            image={item.image}
            description={item.description}
          />
        ))}
      </div> */}
      <div className={styles.topOffersCardContainer}>
        {all_that_you_want?.slice(0, 3).map((item) => {
          return (
            <Link to={`/designers-product-page/${type}/${item.link}`}>
              <div key={item.id} className={styles.item}>
                <LazyLoadingImg image={item.image} height={"225px"} />

                {/* <img src={item.image} alt={item.name} /> */}

                <h1>{item.title}</h1>
              </div>
            </Link>
          );
        })}
      </div>
    </CustomSection>
  );
}
