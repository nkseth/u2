import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import styles from "./card.module.scss";
//icon
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";


export default function ProductCard({ image, data }) {

  console.log(data)
  const [isAddToWishList, setAddToWishList] = useState(false);
  const img =
    "https://s3-alpha-sig.figma.com/img/3c07/019f/e583cf926e4eb5ac2e00ddbc589a945a?Expires=1627257600&Signature=U6CnscpLq5N6EU5SzjU5Mv0U2HjvMMv024ifBJT6y-CV050LIZdGyimCsWjmfjavlfZMwDl~8nQa37gOPDhW-JdXKxMjE9PfoTJ5SrCNr~C2fJXM-WmLKjnI3Ruq8ojRFSJrK~zmFboVZftVBsY39s6VXYVE9wg0V7Sl2lygnNj5OM9H1-e6wvbBX~OcNuvIhAOPfNlbO1JKOVjrHzikmJAmxlXFtraKho7FR1xwS3N8zB3nNiU4woyRsk4syOkhGQc3fN2JajLcnLU5Kj6BosQVlg~XI2IDJj7aF7x7VdT0WNH7DVjE~NP0877cc470~biefr95~tfbSqHMtyurtA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={data.feature_image} alt='product' />
        {isAddToWishList ? (
          <IconButton
            aria-label='product'
            onClick={() => {
              setAddToWishList(false);
            }}
            className={styles.icons}
          >
            <FavoriteIcon style={{ color: "red" }} />
          </IconButton>
        ) : (
          <IconButton
            aria-label='product'
            onClick={() => {
              setAddToWishList(true);
            }}
            className={styles.icons}
          >
            <FavoriteBorderIcon />
          </IconButton>
        )}
      </div>
      <div className={styles.productDetails}>
        <span className={styles.productName}>{data.title}</span>
        <span className={styles.productDesc}>{data.description}</span>
        <p className={styles.productPrice}>
          <span>{data.has_offer ? data.offer_price : data.price}</span>
          {data.has_offer ? <span>{data.price}<span style={{ color: "#9D8E73 " }}  >{data.discount}</span></span> : null}
        </p>
      </div>
    </div>
  );
}
