import React, { useState } from 'react'
import styles from "./Wishlist.module.scss"
import image from "../../Images/image/Select.png"
import { Button, useMediaQuery } from '@material-ui/core'
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RemoveIcon from "@material-ui/icons/Remove";
import BagIcon from "./icon.svg";
import ScissorIcon from "./scissor.svg";

function WishListPage() {
    return (
        <div className={styles.WishList} >
            <div className={styles.Container}>
                <Product image={image} />
                <Product image={image} />
                <Product image={image} />
            </div>
        </div>
    )
}

export default WishListPage


export function Product({ image }) {
    const [customised, setCustomised] = useState(false)
    const MobileView = useMediaQuery("(max-width:450px)");

    return (
        <div className={styles.Product} >
            <div className={styles.main}>
                <img src={image} className={styles.mainImg} />
                <div className={styles.mainInfodiv}>
                    <h1>Men Creamed Blazer With White T-shirt Be Wearing in 2021</h1>
                    <p>Solid colour</p>
                    <div className={styles.PriceDivMobile}>
                        <h3 className={styles.PriceMobile} >₹559</h3>
                        <div className={styles.PriceInfoMobile} >
                            <p>₹1499</p>
                            <span>63%OFF</span>
                        </div>
                    </div>
                    <>
                        <p className={styles.QuanTitleMobile} >Quanity</p>

                        <div className={styles.quanDivMobile}  >
                            <Button
                                className={styles.removeBtn}
                            >
                                <RemoveIcon style={{ width: "15px" }} />
                            </Button>
                            <div className={styles.quantity}>2</div>
                            <Button
                                className={styles.addBtn}
                            >
                                <AddIcon style={{ width: "15px" }} />
                            </Button>
                        </div>
                    </>
                    <h5>Product type</h5>
                    <h6>Readymade</h6>

                    <div className={styles.quantityDiv} >
                        <div className={styles.BtnDiv}>
                            <Button
                                className={styles.AddToBagBtn}
                                startIcon={<img src={BagIcon} style={{ color: "#fff" }} />}
                            >Add to Bag</Button>
                            {
                                customised ?
                                    <Button
                                        className={styles.CustomisedBtn}
                                        startIcon={<img src={ScissorIcon} style={{ color: "#fff" }} />}
                                    >Customised</Button>
                                    :
                                    <></>
                            }
                            {MobileView ?
                                <Button className={styles.RemoveItemBTNMobile} >Remove Item</Button>
                                :
                                <></>}
                        </div>
                    </div>
                </div>
                <div className={styles.PriceDiv}>
                    <h3 className={styles.Price} >₹559</h3>
                    <div className={styles.PriceInfo} >
                        <p>₹1499</p>
                        <span>63%OFF</span>
                    </div>
                    <p className={styles.QuanTitle} >Quanity</p>

                    <div className={styles.quanDiv}  >
                        <Button
                            className={styles.removeBtn}
                        >
                            <RemoveIcon style={{ width: "15px" }} />
                        </Button>
                        <div className={styles.quantity}>2</div>
                        <Button
                            className={styles.addBtn}
                        >
                            <AddIcon style={{ width: "15px" }} />
                        </Button>
                    </div>
                    <Button className={styles.RemoveItemBTN} >Remove Item</Button>
                </div>
            </div>

        </div>
    )
}

