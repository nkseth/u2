import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import CustomDivider from "../../../utils/Custom Divider/divider";
import styles from "../Style/Season_Offers.module.scss";
import ss1 from "../Images/ss1.png";
import ss2 from "../Images/ss2.png";
import ss3 from "../Images/ss3.png";
import { useDispatch, useSelector } from "react-redux";
import { topSeasonOffers } from "../../../Redux/actions/designerHomePage";
const Season_Offers = () => {
  const dispatch = useDispatch();
  const baseStyle = { padding: "5rem 3rem 9rem 3rem" };
  // offer
  const { push } = useHistory();
  const Handler = () => {
    push("offers");
  };
  const { offers } = useSelector((state) => state.root.topSeasonOffers);

  useEffect(() => {
    dispatch(topSeasonOffers());
  }, []);
  return (
    <div className={styles.seasonsoffer} style={baseStyle}>
      <div className={` ${styles.Season_Offers_header}`}>
        Top Offers of the Season
        <CustomDivider style={{ height: "1px", background: "#857250" }} />
      </div>
      <div className={styles.Season_Offers}>
        <div
          className={styles.Season_Offers_Item1}
          style={{
            backgroundImage: `url("${offers[0]?.image}")`,
          }}
        >
          <div>
            <h2>{offers[0]?.title}</h2>
            <Button onClick={Handler}>Button</Button>
          </div>
        </div>
        <div
          className={styles.Season_Offers_Item2}
          style={{
            backgroundImage: `url("${offers[0]?.image}")`,
            backgroundColor: "green",
          }}
        >
          <div>
            <h2 style={{ whiteSpace: "nowrap" }}>{offers[1]?.title}</h2>
            <Button onClick={Handler}>Button</Button>
          </div>
        </div>
        <div
          className={styles.Season_Offers_Item3}
          style={{
            backgroundImage: `url("${offers[0]?.image}")`,
            backgroundColor: "blue",
          }}
        >
          <div>
            <h2 style={{ whiteSpace: "nowrap" }}>{offers[2]?.title}</h2>
            <Button onClick={Handler}>Button</Button>
          </div>
        </div>
        {/* <div className={styles.Season_Offers_Item1}>
          <div>
            <h2>Buy 1 Get 1 One</h2>
            <Button onClick={Handler}>Button</Button>
          </div>
        </div> */}
        {/* <div className={styles.Season_Offers_Item2}>
          <div>
            <h2>50% Flat cashback on this product</h2>
            <Button onClick={Handler}>Button</Button>
          </div>
        </div>
        <div className={styles.Season_Offers_Item3}>
          <div>
            <h2>100% free via purchase </h2>
            <Button onClick={Handler}>Button</Button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Season_Offers;
