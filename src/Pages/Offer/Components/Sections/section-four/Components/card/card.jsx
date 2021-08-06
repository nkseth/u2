import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import styles from "./card.module.scss";
//icon
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function DiscountCard() {
  const [isAddToWishList, setAddToWishList] = useState(false);
  const img =
    "https://images.pexels.com/photos/7137411/pexels-photo-7137411.png?auto=compress&cs=tinysrgb&dpr=2&w=500";
  const brandImg =
    "https://s3-alpha-sig.figma.com/img/4713/6a3b/cff5cac1d1d4fa1392d5d42c298a6553?Expires=1627862400&Signature=fzaHCyagc38H61hqHhYrmTFAFfYDh7iM14x3LSJbulPD4UvvUicAwLSBiCrjuQJ14u29gkrTxuuSNXt2cHVQ32eegIdsKWzOBDFwGP41lmnE6HdMqPjq3YjOoNNT1G22ms-F-ZoxVsUw7MVyPW2-30C0vuPxpaDWVgh2JB6BfivXu53Wncpq~XaxcAhCDujR31HvKVvVHbOR3mLHp3IF-RxczZWUwiLnEMkchTxL-dZv~sL4UqYGqlQHLJY5lAmpVSQn525CT1u34s~6nIbVnakdw6MjSzzzxQEuBlcbk-q2BQTJJKKbEtd2XQJomPb5DFV3ctNIWaIVpSVkl3ldaw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={img} alt='product' />
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
            <FavoriteBorderIcon style={{ color: "#fff" }} />
          </IconButton>
        )}
      </div>
      <div className={styles.brandDetails}>
        <img src={brandImg} alt='brand' />
        <span>Up to 30 - 40% Off</span>
      </div>
    </div>
  );
}
