import React, { useState , useEffect} from "react";
import { IconButton } from "@material-ui/core";
import styles from "./card.module.scss";
//icon
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function ProductCard(props) {

  const [isAddToWishList, setAddToWishList] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({});

  const setValue = async()=>{
    await setIsLoading(true)
    await setProduct(props.product)
    await setIsLoading(false)
  }

  useEffect(async () =>{
    await setValue()
  },[])

  const img =
    "https://s3-alpha-sig.figma.com/img/826b/7045/93ae02d2ad9df755d56a0888155cf6ac?Expires=1627257600&Signature=YXgkD0NeGrqwPGDVnxAXTfQuHut7Ib8rObHaDN9NOxhvy7rBuTQipesmJQ8GHpinj88Sc1O5t67xYDg3c8jwZwCgDKjoiNzDUwyNRsGHbuCBIGlEZ1aoDpkm5T5AYmMpENQ8dX7eXL6Ltj1mDvd-hmXUy9nl3SpmOpQawnF6xLmotxmYkdteCqof5twhq2vnXT0EnlHFIW13tGcgXgdMNxVyNZD0bU-XiCl0xa2IYBhWoOWg1SQx53Tju-Rin-OFIY0fyPQQKwAFHij9jpMyE2R6KDM56G1hzZFptHBeSNtZWI85J9O9HvgaKSJdO6gvfut8tHSZw8EeGG6zfdBvFw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={product.feature_image} alt='product' />
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
        <span className={styles.productName}>{product.title}</span>
        <span className={styles.productDesc}>Men black checked shirt</span>
        <p className={styles.productPrice}>
          <span>{product.price} </span>
          <span>{product.currency_symbol}1499 63% OFF</span>
        </p>
      </div>
    </div>
  );
}
