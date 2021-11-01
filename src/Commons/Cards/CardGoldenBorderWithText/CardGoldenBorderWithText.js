import React from "react";
import { Link } from "react-router-dom";
import styles from "./CardGoldenBorderWithText.module.scss";

export default function CardGoldenBorderWithText({
  redirectToPath,
  coverImage,
  itemId,
  itemName,
}) {
  const customImg = {
    height: "120px",
    width: "115px",
  };
  return (
    <Link to={redirectToPath}>
      <div
        className={styles.Mobile_Image_WhiteBg_Text_Card_Style}
        style={{ width: "123px", height: "128px" }}
      >
        <img src={coverImage} alt={itemId} style={customImg} />
      </div>
      <div
        className={styles.text}
      >
        {itemName}
      </div>
    </Link>
  );
}
