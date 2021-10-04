import React from "react"
import { Box, useMediaQuery } from "@material-ui/core";
import products from "../../../../Images/collabrate/products.svg"
import products1 from "../../../../Images/collabrate/products-1.svg"
import iphone3 from "../../../../Images/collabrate/iPhone3.png"
import styles from "./products.module.scss"


export default function Products({ toggle, open }) {
    const mobileView = useMediaQuery("(max-width:550px)");
    const tabViewPro = useMediaQuery("(max-width:1024px)");

    return (
        <div>
            {
                !tabViewPro ?
                    <>
                        {open === 'products' ?
                            <Box display="flex" marginLeft="84px" marginRight="51px">
                                <Box marginTop="66px">
                                    <img src={products}  />
                                    <p className={styles.heading}>Products</p>
                                    <p className={styles.text}>Inspire your audience to discover, browse and purchase your products from U2 .</p>
                                </Box>
                                <Box  className={styles.image3}>
                                    <img src={iphone3} alt="iphone3" />
                                </Box>
                            </Box>
                            :
                            <Box className={styles.background}
                                onClick={() => toggle('products')}>
                                <Box style={{ marginLeft: "17px" }}>
                                    <img src={products1} style={{marginTop: "60px"}} />
                                    <p className={styles.title}>Products</p>
                                </Box>
                            </Box>
                        }
                    </>


                    :

                    <>
                        
                            {open === 'products' ?
                                <Box marginBottom="60px" marginTop="20px">

                                    <Box className={styles.image3Tab}>
                                        <img src={iphone3} alt="iphone3" />
                                    </Box>

                                    <Box>
                                        <img src={products} />
                                        <p className={styles.heading}>Products</p>
                                        <p className={styles.textTab}>Inspire your audience to discover, browse and purchase your products from U2 .</p>
                                    </Box>

                                </Box>
                                :
                                <Box className={styles.backgroundTab}
                                    onClick={() => toggle('products')}>
                                    <Box style={{ marginLeft: "30px" }}>
                                        <img src={products1} style={{ marginTop: "18px" }}  />
                                        <p className={styles.title}>Products</p>
                                    </Box>
                                </Box>
                            }
                        
                    </>
            }
        </div>
    );
}