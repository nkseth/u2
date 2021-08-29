import React from 'react'
import styles from "./Terms.module.scss"
import { Button, useMediaQuery } from '@material-ui/core';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

function Terms() {
    const customView = useMediaQuery("(max-width:1044px)");
    const tabView = useMediaQuery("(max-width:768px)");
    const mobileView = useMediaQuery("(max-width:550px)");
    return (
        <div className={styles.container} >
            <h1>Things to know!</h1>
            <ul>
                <li className={styles.li} >If you have selected the customized product type, you are the one who is concious about what you wear, and how you want it to be.</li>
                <li className={styles.li} >On ordering customized product type, we’ll stitch this product for your body measurement. You can add the measurement after the payment.</li>
                <Button
                    variant="contained"
                    color="secondary"
                    className={styles.button}
                    startIcon={<PlayCircleFilledIcon />}
                >
                    Watch Measurement Video
                </Button>
                <li className={styles.vectorli} >We are coming up with new order policy called Confirmation On Trial (COT) policy, here you can try the product when delivered and can opt for alteration if necessary. </li>
                <li className={styles.li} >This COT Policy is to ensure that the product matches your body measurements.</li>
                <li className={styles.li} >2 days return policy on product damage. No return on fitting issues because we stitch it perfectly for you.      </li>
            </ul>
        </div>
    )
}

export default Terms
