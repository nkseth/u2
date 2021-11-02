import React from "react";
import { Link } from "react-router-dom";
import styles from "./ImageWhiteBgCard.module.scss";

export default function ImageWhiteBgCard({
  redirectToPath,
  coverImage,
  itemId,
  itemName,
}) {
  const customTextStyle = {
    paddingTop: "0.7rem",
    paddingBottom: "0.7rem",
    paddingLeft: "0.2rem",
    paddingRight: "0.2rem",
  };
  const customImg = {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    height: "112px",
    width: "130px",
  };
  return (
    <Link to={redirectToPath}>
      <div
        className={styles.Mobile_Image_WhiteBg_Text_Card_Style}
        style={{ width: "130px", height: "155px" }}
      >
        <img src={coverImage} alt={itemId} style={customImg} />
        <div style={customTextStyle}>{itemName}</div>
      </div>
    </Link>
  );
}
