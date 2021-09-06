import React, { useEffect } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { IconButton } from "@material-ui/core";
import CustomSection from "../../../../../utils/Custom Section/section";
import CarouselSlide from "./Components/Slide/slide";
import styles from "./newCollection.module.scss";
//icons
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
//BackGroud Image
import bg from "../../../Images/bg.png"
import { useDispatch, useSelector } from "react-redux";
import { get_new_collection } from "../../../../../Redux/actions/mensWear";



export default function NewCollectionSection({ type }) {

  const dispatch = useDispatch();
  const { new_collection } = useSelector(state => state.root.main)
  console.log(new_collection, 'new')

  useEffect(() => {
    const group = type == 'mens' ? 'men_group_1' : type == 'womens' ? 'women_group_1' : 'kid_group_1'
    dispatch(get_new_collection(`${type}_home`, group))
  }, [type])

  return (
    <CustomSection
      style={{
        backgroundColor: "#9d8e73",
        backgroundImage: bg,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        paddingTop: "4rem",
      }}
    >
      <CarouselProvider
        naturalSlideWidth={100}
        totalSlides={2}
        infinite
        isIntrinsicHeight
      >
        <Slider>
          <Slide index={0}>
            <CarouselSlide item={new_collection.length > 0 ? new_collection[0] : {}}>
              <div className={styles.sliderBtnDiv}>
                <ButtonBack className={styles.sliderBtn}>
                  <IconButton className={styles.iconBtn}>
                    <NavigateBeforeIcon />
                  </IconButton>
                </ButtonBack>
                <ButtonNext className={styles.sliderBtn}>
                  <IconButton className={styles.iconBtn}>
                    <NavigateNextIcon />
                  </IconButton>
                </ButtonNext>
              </div>
            </CarouselSlide>
          </Slide>
          <Slide index={1}>
            <CarouselSlide item={new_collection.length > 1 ? new_collection[1] : {}}>
              <div className={styles.sliderBtnDiv}>
                <ButtonBack className={styles.sliderBtn}>
                  <IconButton className={styles.iconBtn}>
                    <NavigateBeforeIcon />
                  </IconButton>
                </ButtonBack>
                <ButtonNext className={styles.sliderBtn}>
                  <IconButton className={styles.iconBtn}>
                    <NavigateNextIcon />
                  </IconButton>
                </ButtonNext>
              </div>
            </CarouselSlide>
          </Slide>
        </Slider>
      </CarouselProvider>
    </CustomSection>
  );
}
