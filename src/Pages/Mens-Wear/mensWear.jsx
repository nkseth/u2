import React, { useEffect, useState } from "react";
import MUICarousel from "react-material-ui-carousel";
import { Carousel } from "react-responsive-carousel";
import Container from "../../utils/Container/container";
import { Grid, useMediaQuery } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import CustomSection from "../../utils/Custom Section/section";
import CategoriesToBagCard from "./components/Categories-Carousel-Card/card";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import { Link } from "react-router-dom";
import styles from "./mensWear.module.scss";
//Carousel Images
import shirt from "./Images/shirt.png"
import Tshirt from "./Images/T-shirt.png"
import blazer from "./Images/blazer.png"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//Sections
import ForHimSection from "./components/Sections/for-him/forHim";
import NewCollectionSection from "./components/Sections/new-collection/newCollection";
import ExploreTopDesignersSection from "./components/Sections/explore-top-designers/exploreTopDesigners";
import StylishRecommendationSection from "./components/Sections/stylish-recommendation/stylishRecommendation";
import MostLovedStyleSection from "./components/Sections/most-loved-style/mostLovedStyle";
import AllThatYouWantSection from "./components/Sections/all-that-you-want/allThatYouWant";
import TopOffersOfTheSeasonSection from "./components/Sections/top-offer-of-the-season/topOffersOfTheSeason";
import CelebrityStyleSection from "./components/Sections/celebrity-style/celebrityStyle";
import { get_mens_wear_cat, get_mens_wear_slider } from "../../Redux/actions/mensWear";

export default function MensWear({ match }) {

  const { params: { type } } = match;

  const mobileView = useMediaQuery("(max-width:550px)");
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const customView = useMediaQuery("(max-width:1125px)");
  const customView2 = useMediaQuery("(max-width:910px)");
  const carouselImg1 =
    "https://s3-alpha-sig.figma.com/img/e0c5/9b62/217c0cbfc4e549ecbe7e3ab7a44b35d5?Expires=1624838400&Signature=Yai9GrJIDlLK7UButwnyGeLNxiSq1IIxZw3tyTYKgH8hPWe10x11ufrNjyBi-5qLEJ3En3i4C00LefmV689~1AmFKVdOHUIOrH1XscxiCYGvyNthgYLWZ-QEmOMxgWRRiHjoY6wKH4DPtfI7C68b5E5uThyQXMDArHjEO4PWoeuIRcEwqno0dyApj7FKNA6737rqbCUJGo5ytbo6woCTA3DM83Aiy91tD3YYla3mTXiwqCJKZ3-qNcYhRdbZGqCY1Ttk8TrMYlUJE3F~eSOdoXeiHOqB-nYW~4vapTQOYLnywaSbeBtZfWVFV4PMCNfdb4oHt~kMy6bHlai998w17g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";

  const dispatch = useDispatch()
  const history = useHistory()
  const { mens_wear_slider, mens_wear_cat } = useSelector(state => state.root.main)

  useEffect(() => {
    dispatch(get_mens_wear_slider())
    dispatch(get_mens_wear_cat(`${type}-fashion`))
  }, [type])

  return (
    <Container footerOnAllView>
      <section className={styles.heroSection}>
        <Carousel
          autoPlay
          emulateTouch
          infiniteLoop
          showStatus={false}
          showArrows={false}
        >
          {mens_wear_slider.map((item) => {
            return (
              <div onClick={() => history.push(item.link)} style={{ backgroundImage: `url(${item.image})` }} className={styles.carouselItem}>
                <div>
                  <span style={{ color: item.title_color }}>{item.title}</span>
                  <p style={{ color: item.sub_title_color }}>
                    {item.sub_title}
                  </p>
                </div>
              </div>
            )
          })}
        </Carousel>
      </section>
      <CustomSection style={{ padding: tabView && "0 1rem" }}>
        <Breadcrumb
          style={{ paddingTop: tabView && "0" }}
          path="Designer Home /"
          activePath={type == 'mens' ? "Men’s wear" : type == 'womens' ? "Women’s wear" : "Kid’s wear"}
        />
      </CustomSection>
      <section className={styles.categoriesToBagSection}>
        <span className={styles.categoriesToBagHeader}>Categories to Bag</span>


        <GRIDLAPTOP data={mens_wear_cat} mobileView={mobileView} tabView={tabView} customView={customView} customView2={customView2} />



      </section>
      <ForHimSection type={type} />
      <NewCollectionSection type={type} />
      <ExploreTopDesignersSection type={type} />
      <StylishRecommendationSection type={type} />
      <MostLovedStyleSection type={type} />
      <AllThatYouWantSection type={type} />
      <TopOffersOfTheSeasonSection type={type} />
      <CelebrityStyleSection type={type} />
    </Container>
  );
}



function GRID({ name, image, classname }) {
  return (
    <Grid
      item
      md={3}
      style={{ display: "flex", justifyContent: "center", marginLeft: "auto", marginRight: "auto" }}
    >
      <CategoriesToBagCard image={image} title={name} />
    </Grid>
  )
}




function GRIDLAPTOP({ mobileView, tabView, customView, customView2, data }) {
  return (
    <MUICarousel
      animation="slide"
      autoPlay={true}
      indicators={false}
      className={styles.menswear_categories}
      navButtonsAlwaysVisible={true}
      autoPlay={false}
      navButtonsAlwaysInvisible={mobileView}
      fullHeightHover={false}
      navButtonsProps={{
        style: {
          backgroundColor: "transparent",
          color: "#000",
          height: "100px",
          width: "10px",
          marginTop: "0em"

        },
      }}
    >

      <Grid
        container
        // style={{ width: "100%", margin: "auto" }}
        justifyContent={!customView ? 'center' : 'space-evenly'}
        wrap={'nowrap'}
        spacing={0}
      >
        {
          !customView2 ?
            data?.length > 2 ? <GRID name={data[2].name} slug={data[2].slug} image={data[2].feature_image} /> : <></>
            :
            <></>
        }
        {data?.length > 0 ? <GRID name={data[0].name} slug={data[0].slug} image={data[0].feature_image} /> : <></>}
        {!customView ?
          <>
            {data?.length > 3 ? <GRID name={data[4].name} slug={data[4].slug} image={data[4].feature_image} /> : <></>}
          </>
          :
          <></>
        }
      </Grid>

      <Grid
        container
        // style={{ width: "100%", margin: "auto" }}
        justifyContent={!customView ? 'center' : 'space-evenly'}
        wrap={'nowrap'}
        spacing={0}
      >
        {
          !customView2 ?
            data?.length > 3 ? <GRID name={data[3].name} slug={data[3].slug} image={data[3].feature_image} /> : <></>
            :
            <></>
        }
        {data?.length > 1 ? <GRID name={data[1].name} slug={data[1].slug} image={data[1].feature_image} /> : <></>}
        {!customView ?
          <>
            {data?.length > 5 ? <GRID name={data[5].name} slug={data[5].slug} image={data[5].feature_image} /> : <></>}
          </>
          :
          <></>
        }
      </Grid>
    </MUICarousel>

  )
}

