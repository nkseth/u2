import React, { useEffect, useState } from "react";
import styles from "./Wishlist.module.scss";
import image from "../../Images/image/Select.png";
import { Button, useMediaQuery } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RemoveIcon from "@material-ui/icons/Remove";
import BagIcon from "./icon.svg";
import ScissorIcon from "./scissor.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  getWishList,
  removeFromWishlist,
  add_to_bag,
} from "../../Redux/actions/wishlist";
import { useHistory } from "react-router-dom";

function WishListPage() {
  const dispatch = useDispatch();

  const { list } = useSelector((state) => state?.root.wishList);
  console.log(list);

  useEffect(() => {
    dispatch(getWishList());
  }, []);
  return (
    <div className={styles.WishList}>
      <div className={styles.Container}>
        {list.length > 0 &&
          list.map((product) => <Product product={product} key={product.id} />)}
      </div>
    </div>
  );
}

export default WishListPage;

export function Product({
  product: {
    id,
    image,
    title,
    currency_symbol,
    discount,
    offer_price,
    price,
    slug,
  },
}) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [customised, setCustomised] = useState(false);
  const MobileView = useMediaQuery("(max-width:450px)");
  const { message } = useSelector((state) => state.root.addToBag);
  console.log(message);
  const removeHandler = () => {
    dispatch(removeFromWishlist(id));
    history.push("/wishlist");
  };
  const addToBagHandler = () => {
    dispatch(add_to_bag(slug));
    if (message) alert(message);
  };

  return (
    <div className={styles.Product}>
      <div className={styles.main}>
        <img src={image} className={styles.mainImg} alt={title} />
        <div className={styles.mainInfodiv}>
          <h1>{title}</h1>
          <p>Solid colour</p>
          <div className={styles.PriceDivMobile}>
            <h3 className={styles.PriceMobile}>{offer_price}</h3>
            <div className={styles.PriceInfoMobile}>
              <p>{price}</p>
              <span>{discount}</span>
            </div>
          </div>
          <>
            <p className={styles.QuanTitleMobile}>Quanity</p>

            <div className={styles.quanDivMobile}>
              <Button className={styles.removeBtn}>
                <RemoveIcon style={{ width: "15px" }} />
              </Button>
              <div className={styles.quantity}>2</div>
              <Button className={styles.addBtn}>
                <AddIcon style={{ width: "15px" }} />
              </Button>
            </div>
          </>
          <h5>Product type</h5>
          <h6>Readymade</h6>

          <div className={styles.quantityDiv}>
            <div className={styles.BtnDiv}>
              <Button
                onClick={addToBagHandler}
                className={styles.AddToBagBtn}
                startIcon={<img src={BagIcon} style={{ color: "#fff" }} />}
              >
                Add to Bag
              </Button>
              {customised ? (
                <Button
                  className={styles.CustomisedBtn}
                  startIcon={
                    <img src={ScissorIcon} style={{ color: "#fff" }} />
                  }
                >
                  Customised
                </Button>
              ) : (
                <></>
              )}
              {MobileView ? (
                <Button
                  className={styles.RemoveItemBTNMobile}
                  onClick={removeHandler}
                >
                  Remove Item
                </Button>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className={styles.PriceDiv}>
          <h3 className={styles.Price}>{offer_price}</h3>
          <div className={styles.PriceInfo}>
            <p>{price}</p>
            <span>{discount}</span>
          </div>
          <p className={styles.QuanTitle}>Quanity</p>

          <div className={styles.quanDiv}>
            <Button className={styles.removeBtn}>
              <RemoveIcon style={{ width: "15px" }} />
            </Button>
            <div className={styles.quantity}>2</div>
            <Button className={styles.addBtn}>
              <AddIcon style={{ width: "15px" }} />
            </Button>
          </div>
          <Button className={styles.RemoveItemBTN} onClick={removeHandler}>
            Remove Item
          </Button>
        </div>
      </div>
    </div>
  );
}