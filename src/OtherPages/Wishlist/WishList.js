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
import Loader from "../../utils/Loader/Loader";
import {
  getWishList,
  removeFromWishlist,
  add_to_bag,
  clearUpdateWishlist,
} from "../../Redux/actions/wishlist";
import { Link, useHistory } from "react-router-dom";

function WishListPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { added, removed, loading } = useSelector(
    (state) => state?.root.updateWishlist
  );
  const { list } = useSelector((state) => state?.root.wishlist);
  const { user, isAuthenticated } = useSelector((state) => state?.root.auth);
  console.log(list);

  useEffect(() => {
    if (!isAuthenticated) return;
    if (!loading) {
      if (added) {
        // alert(added);
        dispatch(clearUpdateWishlist());
      }
      if (removed) {
        // alert(added);
        dispatch(clearUpdateWishlist());
      }
    }
    dispatch(getWishList(user.api_token));
  }, [isAuthenticated, user, added, removed, history, loading, dispatch]);
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
    custom_price,
    custom_offer_price,
    custom_discount,
    readymade_price,
    readymade_offer_price,
    readymade_discount,
    discount,
    offer_price,
    price,
    slug,
    product_id,
    type,
    fabric,
  },
}) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [customised, setCustomised] = useState(false);
  const MobileView = useMediaQuery("(max-width:450px)");
  const { message } = useSelector((state) => state.root.addToBag);
  const { user } = useSelector((state) => state.root.auth);

  const removeHandler = () => {
    dispatch(removeFromWishlist(product_id, user.api_token));
  };
  const addToBagHandler = () => {
    dispatch(add_to_bag(slug, type));
    dispatch(removeFromWishlist(product_id, user.api_token));
  };
  const itemPrice = type === "readymade" ? readymade_price : custom_price;
  return (
    <div className={styles.Product}>
      <div className={styles.main}>
        <Link to={`/product-description/${slug}`}>
          <img src={image} className={styles.mainImg} alt={title} />
        </Link>
        <div className={styles.mainInfodiv}>
          <h1>{title}</h1>
          <p>{fabric}</p>
          {type === "readymade" ? (
            readymade_offer_price > 0 ? (
              <div className={styles.PriceDivMobile}>
                <h3 className={styles.PriceMobile}>
                  {currency_symbol}
                  {readymade_offer_price}
                </h3>
                <div className={styles.PriceInfoMobile}>
                  <p>{readymade_price}</p>
                  <span>{readymade_discount}% off</span>
                </div>
              </div>
            ) : (
              <div className={styles.PriceDivMobile}>
                <h3 className={styles.PriceMobile}>
                  {currency_symbol}
                  {readymade_price}
                </h3>
              </div>
            )
          ) : custom_offer_price > 0 ? (
            <div className={styles.PriceDivMobile}>
              <h3 className={styles.PriceMobile}>
                {currency_symbol}
                {custom_offer_price}
              </h3>
              <div className={styles.PriceInfoMobile}>
                <p>{custom_price}</p>
                <span>{custom_discount}% off</span>
              </div>
            </div>
          ) : (
            <div className={styles.PriceDivMobile}>
              <h3 className={styles.PriceMobile}>
                {currency_symbol}
                {custom_price}
              </h3>
            </div>
          )}
          {/* <>
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
          </> */}
          <h5>Product type</h5>
          <h6>{type.toUpperCase()}</h6>

          <div className={styles.quantityDiv}>
            <div className={styles.BtnDiv}>
              <Button
                onClick={addToBagHandler}
                className={styles.AddToBagBtn}
                startIcon={
                  <img src={BagIcon} style={{ color: "#fff" }} alt="bagIcon" />
                }
              >
                Add to Bag
              </Button>
              {customised ? (
                <Button
                  className={styles.CustomisedBtn}
                  startIcon={
                    <img
                      src={ScissorIcon}
                      style={{ color: "#fff" }}
                      alt="ScissorIcon"
                    />
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
        {type === "readymade" ? (
          readymade_offer_price > 0 ? (
            <div className={styles.PriceDivMobile}>
              <h3 className={styles.PriceMobile}>
                {currency_symbol}
                {readymade_offer_price}
              </h3>
              <div className={styles.PriceInfoMobile}>
                <p>{readymade_price}</p>
                <span>{readymade_discount}% off</span>
              </div>
            </div>
          ) : (
            <div className={styles.PriceDivMobile}>
              <h3 className={styles.PriceMobile}>
                {currency_symbol}
                {readymade_price}
              </h3>
            </div>
          )
        ) : custom_offer_price > 0 ? (
          <div className={styles.PriceDivMobile}>
            <h3 className={styles.PriceMobile}>
              {currency_symbol}
              {custom_offer_price}
            </h3>
            <div className={styles.PriceInfoMobile}>
              <p>{custom_price}</p>
              <span>{custom_discount}% off</span>
            </div>
          </div>
        ) : (
          <div className={styles.PriceDivMobile}>
            <h3 className={styles.PriceMobile}>
              {currency_symbol}
              {custom_price}
            </h3>
          </div>
        )}
        <div className={styles.PriceDiv}>
          {type === "readymade" ? (
            readymade_offer_price > 0 ? (
              <>
                <h3 className={styles.Price}>
                  {currency_symbol}
                  {readymade_offer_price}
                </h3>
                <div className={styles.PriceInfo}>
                  <p>
                    {currency_symbol}
                    {readymade_price}
                  </p>
                  <span>{readymade_discount}% off</span>
                </div>
              </>
            ) : (
              <h3 className={styles.Price}>
                {currency_symbol}
                {readymade_price}
              </h3>
            )
          ) : custom_offer_price > 0 ? (
            <>
              <h3 className={styles.Price}>
                {currency_symbol}
                {custom_offer_price}
              </h3>
              <div className={styles.PriceInfo}>
                <p>
                  {currency_symbol}
                  {custom_price}
                </p>
                <span>{custom_discount}% off</span>
              </div>
            </>
          ) : (
            <h3 className={styles.Price}>
              {currency_symbol}
              {custom_price}
            </h3>
          )}
          {/* <p className={styles.QuanTitle}>Quanity</p>

          <div className={styles.quanDiv}>
            <Button className={styles.removeBtn}>
              <RemoveIcon style={{ width: "15px" }} />
            </Button>
            <div className={styles.quantity}>2</div>
            <Button className={styles.addBtn}>
              <AddIcon style={{ width: "15px" }} />
            </Button>
          </div> */}
          <Button className={styles.RemoveItemBTN} onClick={removeHandler}>
            Remove Item
          </Button>
        </div>
      </div>
    </div>
  );
}
