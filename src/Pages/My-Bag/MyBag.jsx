import React, { useState, useEffect } from "react";
import {
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
} from "@material-ui/core";
import SelectedFabricSample from "./Components/Selected-Fabric-Sample/index";
import SelectedSubscriptionPlans from "./Components/Selected-Subscription-plan";
import Container from "../../utils/Container/container";
import { Link, useHistory } from "react-router-dom";
import CustomDivider from "../../utils/Custom Divider/divider";
import CustomSection from "../../utils/Custom Section/section";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import CustomStepper from "../../utils/Stepper/stepper";
import styles from "./MyBag.module.scss";
//icons
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RemoveIcon from "@material-ui/icons/Remove";
import { ReactComponent as CouponIcon } from "../../Images/icons/coupon.svg";
import common_axios from "../../utils/axios.config";
import { useSelector } from 'react-redux';


export default function MyBag() {
  const history = useHistory();
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState([])
  const [value, setValue] = useState({})
  const [loading, setLoading] = useState(false)
  const img =
    "https://images.pexels.com/photos/1096849/pexels-photo-1096849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=165";

  const { user_data } = useSelector(state => state.root.main)

  useEffect(() => {
    fetch_data()
  }, [])

  const fetch_data = async () => {
    try {
      const { data: val } = await common_axios.get('/carts')
      console.log(val)
      if (val.data) {
        setValue(val?.data[0])
        setData(val?.data[0]?.items)
      }
    } catch (e) {
      console.log(e.response?.data)
    }
  }

  const add_quantity = async (item, index) => {
    setLoading(true)
    try {
      const { data: res } = await common_axios.put(`/cart/${value.id}/update`, {
        item: item.id,
        quantity: parseInt(item.quantity) + 1
      })
      data[index].quantity = parseInt(data[index].quantity) + 1
      setData(data)
      setLoading(false)
    } catch (e) {
      setLoading(false)
      alert(e?.response?.data?.message)
      console.log(e?.response?.data)
    }
  }

  const substract_quantity = async (item, index) => {
    setLoading(true)
    if (parseInt(item.quantity) > 1) {
      try {
        const { data: res } = await common_axios.put(`/cart/${value.id}/update`, {
          item: item.id,
          quantity: parseInt(item.quantity) - 1
        })
        let val = data;
        val[index].quantity = parseInt(val[index].quantity) - 1
        setData(val)
        setLoading(false)
      } catch (e) {
        setLoading(false)
        alert(e?.response?.data?.message)
        console.log(e?.response?.data)
      }
    } else (
      alert("Quantity can't be less than 1")
    )
  }

  const move_to_wishlist = async (item) => {

    try {
      const { data: res } = await common_axios.get(`/wishlist/${item.id}/add`);
      remove_item(item)
      console.log(res)
    } catch (e) {
      alert(e.response?.data?.message)
    }
  }

  const remove_item = async (item) => {
    fetch('http://3.109.176.19/api/cart/removeItem', {
      "method": "DELETE",
      headers: {
        accept: "application/json",
        'content-type': "application/json",
        "Authorization": `Bearer ${user_data.api_token}`
      },
      body: JSON.stringify({
        item: item.id,
        cart: value.id
      })
    }).then((res) => res.json())
      .then((json) => {
        console.log(json)
        if(json.message == 'Item hs been removed'){
          setData(json.cart?.items)
          setValue(json.cart)
        }
      })
    // try{
    //   const {data: res } = await common_axios.delete('/cart/removeItem',{
    //     item: item.id,
    //     cart: value.id
    //   })
    //   console.log(res)

    //   const new_data = data.filter(function (el){
    //     return el.id != item.id
    //   })

    //   setData(new_data)
    // } catch(e){
    //   console.log(e)
    // }
  }

  return (
    <Container bottomDivider footerOnTabMob>
      <CustomSection style={mobileView ? { marginTop: "0" } : { marginTop: "3em" }} >
        <Breadcrumb
          path='Home / Men / Blazers'
          activePath='/ My Bag'

        />
        <div>
        </div>
        <div className={styles.container}>
          {
            mobileView ?
              <>
                <MobileProductMyBag data={data} img={img} quantity={quantity} setQuantity={setQuantity} add_quantity={add_quantity} substract_quantity={substract_quantity} remove_item={remove_item} move_to_wishlist={move_to_wishlist} />
              </>
              //This component ⬆ is for mobile view dont itterate this component go inside it and ittetrate there
              :

              <div className={styles.firstContainer}>
                <div>My Bag</div>
                {data?.map((item, index) => {
                  return (
                    <div className={styles.mainContainer} >
                      <img src={item.product?.image} alt='product' className={styles.image} />
                      <div>
                        <div style={{ alignItems: "flex-start" }} >
                          <p className={styles.proName} >
                            {item.title}
                          </p>
                          <p>{item.color}</p>

                          <div>

                            <h4>Product Type</h4>
                            <p>{item.productType}</p>
                            <Button onClick={() => move_to_wishlist(item)} className={styles.MoveToWishListBtn} >Move to Wishlist</Button>
                          </div>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
                          <p>{item.hasOffer ? item.offer_price : item.unit_price}</p>
                          <p className={styles.priceSpanP}  >
                            <span className={styles.priceSpan} >{item.price}</span>
                            <span className={styles.priceSpan1} >{item.discount}</span>
                          </p>
                          <div className={styles.quan} >
                            <p>Quantity</p>
                            <div style={{ display: "flex" }} >
                              <Button
                                className={styles.addBtn}
                                onClick={() => substract_quantity(item, index)}
                              >
                                <RemoveIcon style={{ width: "15px" }} />
                              </Button>
                              <div className={styles.quantity}>{item.quantity}</div>
                              <Button
                                className={styles.removeBtn}
                                onClick={() => add_quantity(item, index)}
                              >
                                <AddIcon style={{ width: "15px" }} />
                              </Button>
                            </div>
                            <Button onClick={() => remove_item(item)} className={styles.RemoveBTN} >Remove item </Button>
                          </div>
                        </div>


                      </div>
                    </div>
                  )
                })}
                <div>
                  <div>

                  </div>
                </div>
              </div>


          }
          <div className={styles.lastContainer}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>Price Details</div>
                <div className={styles.BtnlIkediv} >{data?.length}</div>
              </div>
              <div>
                <CustomDivider style={{ backgroundColor: "#CECECE" }} />
                <div className={styles.selectedProductPrices}>
                  <div>
                    <label>Product Price</label>
                    <span>{value?.total}</span>
                  </div>
                  <div>
                    <label>Service charges</label>
                    <span>{value?.taxes}</span>
                  </div>
                  <div>
                    <label>Delivery charges</label>
                    <span>{value?.delivery_charge || '$0'}</span>
                  </div>
                </div>
                <CustomDivider style={{ backgroundColor: "#CECECE" }} />
              </div>
              <div className={styles.totalAmtDiv}>
                <div>
                  <label>Total Amount</label>
                  <span>{value?.grand_total}</span>
                </div>
              </div>

              <Button
                variant='text'
                color='default'
                className={styles.placeOrderBtn}
                onClick={() => history.push("/delivery-address")}
              >
                Checkout
              </Button>
            </div>


          </div>
        </div>
      </CustomSection>
    </Container>
  );
}

const MobileProductMyBag = ({ img, substract_quantity, add_quantity, data, remove_item, move_to_wishlist }) => {
  return (
    <div className={styles.MobileConatiner}>
      <h1 className={styles.h1}  >My Bag</h1>
      {/* Ittitrate from here */}
      {data?.map((item, index) => {
        return (
          <di className={styles.mainDiv}>
            <div className={styles.ImageQuanDiv}>
              <img src={item.product?.image} className={styles.mainimg} />
            </div>
            <div className={styles.InfoDiv} >
              <div className={styles.mainInfo}>
                <h1>{item.title}</h1>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", width: "100%" }}>
                  <div style={{ display: "flex", flexDirection: "column", width: "80%" }}  >
                    <p className={styles.PType1}  >Product Type</p>
                    <p className={styles.PType2} >{item.productType}</p>
                  </div>

                </div>
                <div className={styles.quan} >
                  <p>Quantity</p>
                  <div style={{ display: "flex" }} >
                    <Button
                      className={styles.addBtn}
                      onClick={() => substract_quantity(item, index)}
                    >
                      <RemoveIcon style={{ width: "15px" }} />
                    </Button>
                    <div className={styles.quantity}>{item.quantity}</div>
                    <Button
                      className={styles.removeBtn}
                      onClick={() => add_quantity(item, index)}
                    >
                      <AddIcon style={{ width: "15px" }} />
                    </Button>
                  </div>
                </div>

                <div className={styles.PriceMobile}>
                  <p className={styles.PriceMobileMain} >{item.hasOffer ? item.offer_price : item.unit_price}</p>
                  <p className={styles.PriceMobileOriginal} >{item.unit_price}</p>
                  <p className={styles.PriceMobileDiscount} >{item.discount}</p>
                </div>

                <Button onClick={() => move_to_wishlist(item)} className={styles.MoveToWishListBtnMobile}>Move to Whishlist</Button>
                <Button onClick={() => remove_item(item)} className={styles.RemoveBTNMobile} >Remove item </Button>
              </div>

            </div>
          </di>
        )
      })}
      {/* till here */}
    </div>
  )
}