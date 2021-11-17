import React, { useEffect } from "react";
import { Grid, useMediaQuery, Button } from "@material-ui/core";
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
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";


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
        paddingBottom: mobileView ? "38px" : "146px",
        paddingTop: mobileView ? "30px" : "66px",
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
      {
        !mobileView ?
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
          </div> :
          <div className={styles.topOffersCardContainer}>
            <Swiper slidesPerView={3}>
              {
                all_that_you_want?.map((item) => {
                  const data = item.title.split(" ")
                  return (
                    <SwiperSlide style={{ margin: "0.5rem" }}>
                      <Button className={styles.allThatButton}> <span><span style={{ fontSize: "12px", fontFamily: " DM Sans", textTransform: "initial", fontWeight: 400 }}>{data[0]}</span><br /><span style={{ fontSize: "20px", fontFamily: 'DM Serif Display', fontWeight: 400 }}>{data[1]}{data[2]}{data[3]}</span></span></Button>
                    </SwiperSlide>
                  )
                })
              }

            </Swiper>
            {/* {all_that_you_want?.slice(0, 3).map((item) => {
              const data = item.title.split(" ")
              console.log(data[0])
              return (

                <Button className={styles.allThatButton}> <span><span style={{ fontSize: "12px" }}>{data[0]}</span><br /><span style={{ fontSize: "20px" ,fontFamily:'DM Serif Display'}}>{data[1]}{data[2]}{data[3]}</span></span></Button>
              );
            })} */}
          </div>
      }

    </CustomSection>
  );
}
