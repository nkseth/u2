import React, { useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../../../../utils/Loader/Loader";
import "./CartOffers.scss";
const CartOffers = ({ setCoupon, coupon, toggle }) => {
  const { couponList, loading } = useSelector((state) => state.root.coupons);
  const [selectedCoupon, setSelectedCoupon] = useState(coupon);
  const applyHandler = (e) => {
    e.preventDefault();
    if (!selectedCoupon) return alert("No Coupon Selected.");
    setCoupon(selectedCoupon);
    toggle();
  };
  return (
    <div className="cartOffers">
      {loading ? (
        <Loader />
      ) : couponList ? (
        <div className="cartOffers__coupons">
          <h1 className="cartOffers__coupons__heading">Available Offers</h1>
          {couponList.map((couponData) => (
            <div
              key={couponData.id}
              className="cartOffers__coupons__body"
              style={
                couponData.valid
                  ? {
                      cursor: "pointer",
                      borderColor: coupon
                        ? couponData.id === selectedCoupon.id
                          ? "#6a5b40"
                          : "#cecece"
                        : "#cecece",
                    }
                  : {
                      cursor: "default",
                      borderColor: coupon
                        ? couponData.id === selectedCoupon.id
                          ? "#6a5b40"
                          : "#cecece"
                        : "#cecece",
                    }
              }
              onClick={() => setSelectedCoupon(couponData)}
            >
              <div className="cartOffers__coupons__body__top">
                <span>{couponData.amount} Cashback</span>
                <span>On Minimum purchase of</span>
              </div>
              <div className="cartOffers__coupons__body__bottom    ">
                <span>Promo code: {couponData.code}</span>
                <span>{couponData.validity}</span>
              </div>
            </div>
          ))}
          <button className="cartOffers__coupons__apply" onClick={applyHandler}>
            Apply
          </button>
        </div>
      ) : (
        <h1>No Coupons Available</h1>
      )}
    </div>
  );
};

export default CartOffers;
