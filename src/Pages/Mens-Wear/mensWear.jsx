import React from "react";
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


//Sections
import ForHimSection from "./components/Sections/for-him/forHim";
import NewCollectionSection from "./components/Sections/new-collection/newCollection";
import ExploreTopDesignersSection from "./components/Sections/explore-top-designers/exploreTopDesigners";
import StylishRecommendationSection from "./components/Sections/stylish-recommendation/stylishRecommendation";
import MostLovedStyleSection from "./components/Sections/most-loved-style/mostLovedStyle";
import AllThatYouWantSection from "./components/Sections/all-that-you-want/allThatYouWant";
import TopOffersOfTheSeasonSection from "./components/Sections/top-offer-of-the-season/topOffersOfTheSeason";
import CelebrityStyleSection from "./components/Sections/celebrity-style/celebrityStyle";

export default function MensWear() {
  const mobileView = useMediaQuery("(max-width:550px)");
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const customView = useMediaQuery("(max-width:1445px)");
  const carouselImg1 =
    "https://s3-alpha-sig.figma.com/img/e0c5/9b62/217c0cbfc4e549ecbe7e3ab7a44b35d5?Expires=1624838400&Signature=Yai9GrJIDlLK7UButwnyGeLNxiSq1IIxZw3tyTYKgH8hPWe10x11ufrNjyBi-5qLEJ3En3i4C00LefmV689~1AmFKVdOHUIOrH1XscxiCYGvyNthgYLWZ-QEmOMxgWRRiHjoY6wKH4DPtfI7C68b5E5uThyQXMDArHjEO4PWoeuIRcEwqno0dyApj7FKNA6737rqbCUJGo5ytbo6woCTA3DM83Aiy91tD3YYla3mTXiwqCJKZ3-qNcYhRdbZGqCY1Ttk8TrMYlUJE3F~eSOdoXeiHOqB-nYW~4vapTQOYLnywaSbeBtZfWVFV4PMCNfdb4oHt~kMy6bHlai998w17g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";
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
          <div className={styles.carouselItem}>
            <div>
              <span>Men’s Wear </span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className={styles.carouselItem}>
            <div>
              <span>Men’s Wear </span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className={styles.carouselItem}>
            <div>
              <span>Men’s Wear </span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </Carousel>
      </section>
      <CustomSection style={{ padding: tabView && "0 1rem" }}>
        <Breadcrumb
          style={{ paddingTop: tabView && "0" }}
          path="Designer Home /"
          activePath="Men’ wear"
        />
      </CustomSection>
      <section className={styles.categoriesToBagSection}>
        <span className={styles.categoriesToBagHeader}>Categories to Bag</span>
        <MUICarousel
          animation="slide"
          indicators={tabView}
          className={styles.menswear_categories}
          navButtonsAlwaysVisible={true}
          autoPlay={false}
          navButtonsAlwaysInvisible={tabView}
          fullHeightHover={false}
          navButtonsProps={{
            style: {
              backgroundColor: "#6C6C6C",
              height: "40px",
              width: "40px",
            },
          }}
        >
          <Grid
            container
            style={{ width: "100%", margin: "0" }}
            justify="center"
            spacing={2}
          >
            {!customView && (
              <Grid
                item
                md={3}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <CategoriesToBagCard image={blazer} title='Shirt' />
              </Grid>
            )}
            {!mobileView && (
              <Grid
                item
                md={customView ? 4 : 3}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <CategoriesToBagCard image={shirt} title='Shirt' />
              </Grid>
            )}

            <Grid
              item
              xs={mobileView && 12}
              md={mobileView ? 12 : customView ? 4 : 3}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <CategoriesToBagCard image={Tshirt} title='Shirt' />
            </Grid>
          </Grid>
          <Grid
            container
            style={{ width: "100%", margin: "0" }}
            justify="center"
            spacing={2}
          >
            {!customView && (
              <Grid
                item
                md={3}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <CategoriesToBagCard image={shirt} title='Shirt' />
              </Grid>
            )}
            {!mobileView && (
              <Grid
                item
                md={customView ? 4 : 3}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <CategoriesToBagCard image={blazer} title='Blazer' />
              </Grid>
            )}

            <Grid
              item
              xs={mobileView && 12}
              md={mobileView ? 12 : customView ? 4 : 3}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <CategoriesToBagCard image={Tshirt} title='T-Shirt' />
            </Grid>
          </Grid>
        </MUICarousel>
      </section>
      <ForHimSection />
      <NewCollectionSection />
      <ExploreTopDesignersSection />
      <StylishRecommendationSection />
      <MostLovedStyleSection />
      <AllThatYouWantSection />
      <TopOffersOfTheSeasonSection />
      <CelebrityStyleSection />
    </Container>
  );
}
