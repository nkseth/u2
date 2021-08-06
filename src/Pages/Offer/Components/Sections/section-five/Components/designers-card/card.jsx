import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import styles from "./card.module.scss";
//icon
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function ProductCard() {
  const [isAddToWishList, setAddToWishList] = useState(false);
  const img =
    "https://s3-alpha-sig.figma.com/img/fa9c/cf02/64bfed544d8e83855faf14e202965ed0?Expires=1627862400&Signature=ZoUkcnp9NEs2NgNB73Q9NzZDp3WQOVnskdhaWpMPvUzlNL4CamjnUPsWDnh8X4rk4BXOem2HCNq6Y-3b9krj6okx~1gueCQa78e2Qx6dOEL9RHodUq6pHxMPQIiSlzSbUE4TjvnZRYFqzBXyH9sru3tOgLgu5Z3D6PlqEkCHnTxC7WuUCHWKXqQbCBDAOqv242qTYLMerVI2d5peTKojcZI8efGemTnzIiBpIEgVMVOotfdQ4BF6sYO1E5SaJX5lQCK6reTJ8RQYVjioa1uI1q8~n2Uys-Xezw56o-doZ1ow3YMe8XtCEXz~ULasYuAAIhuy3oA99sLcRWTc7jYxRw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";
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
            <FavoriteBorderIcon />
          </IconButton>
        )}
      </div>
      <div className={styles.productDetails}>
        <span className={styles.productName}>Wrong</span>
        <span className={styles.productDesc}>
          Navy blue slim fit checket casual shirt
        </span>
        <p className={styles.productPrice}>
          <span>₹554 </span>
          <span>₹1499 63% OFF</span>
        </p>
      </div>
    </div>
  );
}
