
import React from 'react'
import Container from "../../../../utils/Container/container"
import CustomDivider from '../../../../utils/Custom Divider/divider'
import SideNavbar from '../../../../utils/Side-Navbar/sideNavbar'
import styles from "./cancelOrder.module.scss"
import { Button, FormControlLabel, Radio, RadioGroup, useMediaQuery } from '@material-ui/core';
import Breadcrumb from '../../../../utils/Breadcrumb/breadcrumb'
import product_image from '../../../../Images/image/Select.png'
import { TextField } from '@mui/material'
import { styled, withStyles } from '@material-ui/styles'

export default function CancelOrder() {

    const CustomTextField = styled(TextField)({
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#857250',
            },
            '&:hover fieldset': {
                borderColor: '#857250',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#857250',
            },
        },
    });

    const CustomRadio = withStyles({
        root: {
          color: '#9D9D9D',
          '&$checked': {
            color: '#857250',
          },
        },
        checked: {},
      })(props => <Radio color='default' {...props} />);



    const tabView = useMediaQuery('(max-width:768px)');
    const mobileView = useMediaQuery('(max-width:500px)');
    return (
        <Container bottomDivider pBottom='0' footerOnTabMob>
            <section className={styles.section}>
                {!tabView && <SideNavbar />}
                <div className={styles.cardsDivOuterContainer}>
                    {tabView && (
                        <Breadcrumb path='Home /' activePath='Profile / Orders' />
                    )}
                    {!mobileView && (
                        <div className={styles.headerDiv}>
                            <span className={styles.header}>Orders</span>
                            <CustomDivider />
                        </div>
                    )}
                    <div className={styles.ordersCardDiv}>
                        <div className={styles.cardContainer} >
                            <div>
                                <img
                                    src={product_image}
                                    alt="product"
                                    className={styles.ordered_image}
                                />
                            </div>
                            <div className={styles.detailsDiv}>
                                <div className={styles.detailOne}>
                                    <div>
                                        <h1>title</h1>
                                        <span>Solid Straight Kurta</span>
                                    </div>
                                    <div>
                                        <h1>$100</h1>
                                    </div>
                                </div>
                                {!mobileView && (
                                    <div className={styles.detailTwo}>
                                        <p>size:L</p>
                                        <p>Quantity: 01</p>
                                        <p>Product Type</p>
                                        <p style={{ textTransform: 'capitalize' }}>type</p>
                                    </div>
                                )}
                                {mobileView && (
                                    <div className={styles.detailTwo}>
                                        <p>Product Type</p>
                                        <p style={{ textTransform: 'capitalize' }}>type</p>
                                        <p>Quantity: 01</p>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                    <div className={styles.reason_group}>
                        <div>
                            <h2>Reasons for cancellation</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                        </div>
                        <div>
                            <RadioGroup
                                aria-label="Reasons"
                                defaultValue="2"
                            >
                                <FormControlLabel
                                    value="1"
                                    control={<CustomRadio />}
                                    label={<span className={styles.label}>I found another best product in this price</span>} />
                                <FormControlLabel
                                    value="2"
                                    control={<CustomRadio />}
                                    label={<span className={styles.label}> Quality issue </span>} />
                                <FormControlLabel
                                    value="3"
                                    control={<CustomRadio />}
                                    label={<span className={styles.label}>It’s to costly</span>} />
                                <FormControlLabel
                                    value="4"
                                    control={<CustomRadio />}
                                    label={<span className={styles.label}>Wants to change product</span>} />
                                <FormControlLabel
                                    value="5"
                                    control={<CustomRadio />}
                                    label={<span className={styles.label}>By mistake order</span>} />
                            </RadioGroup>
                        </div>
                        <div>
                            <CustomTextField
                                className={styles.comment}
                                multiline
                                rows={4}
                                variant="outlined"
                                placeholder='Additional comments'
                            />
                        </div>
                        {!mobileView ?
                            <div>
                                <Button>Cancel</Button>
                            </div>
                            :
                            <div>
                                <Button>Cancel order</Button>
                            </div>
                        }

                    </div>
                </div>

            </section>
        </Container >
    )
}
