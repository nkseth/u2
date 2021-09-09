import React, { useEffect } from "react";
import { useMediaQuery } from "@material-ui/core";
import CustomSection from "../../../../../utils/Custom Section/section";
import StylishCard from "./Components/stylish-cards/card";
import styles from "./stylishRecommendation.module.scss";
//images
import stylish1 from "../../../Images/stylish-1.png"
import stylish2 from "../../../Images/stylish-2.png"
import stylish3 from "../../../Images/stylish-3.png"
import stylish4 from "../../../Images/stylish-4.png"
import stylish5 from "../../../Images/stylish-5.png"
import { useDispatch, useSelector } from "react-redux";
import { get_most_loved, get_stylish_recommend } from "../../../../../Redux/actions/mensWear";


export default function StylishRecommendationSection({ type }) {
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");

  const dispatch = useDispatch()

  useEffect(() => {
    const group = type == 'mens' ? 'men_group_2' : type == 'womens' ? 'women_group_2' : 'kid_group_2'
    dispatch(get_stylish_recommend(`${type}_home`, group))
  }, [type])

  const { stylish_recommend } = useSelector(state => state.root.main)
  console.log(stylish_recommend)
  return (
    <CustomSection
      style={{
        backgroundColor: "#E6E3DC36",
        paddingTop: "43px",
        paddingBottom: "43px",
      }}
    >
      <div className={styles.header}>
        <span>Stylish</span>
        <span>Recommendation</span>
      </div>
      <div className={styles.cardContainer}>
        {stylish_recommend.map((item) => {
          return (
            <div>
              <StylishCard item={item} image={item.image} />
            </div>
          )
        })}
        {mobileView && (
          <div>
            <StylishCard image={stylish1} />
            <StylishCard image={stylish2} />
            <StylishCard image={stylish3} />
            <StylishCard image={stylish4} />
            <StylishCard image={stylish5} />
          </div>
        )}
        {!mobileView && (
          <>
            <div className={styles.firstCon}>
              <div>
                <StylishCard image={stylish1} />

              </div>
              <div>
                <StylishCard image={stylish2} />

              </div>
            </div>
            <div className={styles.secondCon}>
               <div>
                <StylishCard image={stylish3} />

              </div> 
              <div>
                <StylishCard image={stylish4} />

              </div>
              <div>
                <StylishCard image={stylish5} />

              </div>
            </div>
          </>
        )}
      </div>
    </CustomSection>
  );
}
