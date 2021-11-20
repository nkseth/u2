
import React, { useEffect, useState } from 'react'
import Container from "../../../../utils/Container/container"
import CustomDivider from '../../../../utils/Custom Divider/divider'
import SideNavbar from '../../../../utils/Side-Navbar/sideNavbar'
import styles from "./cancelOrder.module.scss"
import { Button, FormControlLabel, Radio, RadioGroup, useMediaQuery } from '@material-ui/core';
import Breadcrumb from '../../../../utils/Breadcrumb/breadcrumb'
import product_image from '../../../../Images/image/Select.png'
import { TextField } from '@mui/material'
import { styled, withStyles } from '@material-ui/styles'
import common_axios from '../../../../utils/axios.config'
import { useHistory } from 'react-router-dom';

export default function CancelOrder({ match }) {

    const history = useHistory()

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


    const {
        params: { item_id, order_id },
    } = match;
    const [product, setProduct] = useState({})
    const [order, setOrder] = useState({})
    const [comment, setComment] = useState('')
    const [point, setPoint] = useState('')

    useEffect(() => {
        get_orderDetails()
    }, [])

    const get_orderDetails = async () => {
      try{
        const { data } = await common_axios.get(`/order/${order_id}`)
        if(data.data){
           data.data.items?.forEach((item)=>{
               if(item.id == item_id){
                   setProduct(item)
                   setOrder(data.data)
               }
           })
        }
      } catch(e){
          console.log(e)
      }
      
    }

    const on_cancel = async () => {
      try{
          const { data } = await common_axios.post('/order_cancellation',{
              order_id,
              item_id,
              point,
              comment
          })
          console.log(data)
          history.push('/all-orders')
      } catch(e){
          console.log(e)
      }
    }


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
                                    src={product.feature_image}
                                    alt="product"
                                    className={styles.ordered_image}
                                />
                            </div>
                            <div className={styles.detailsDiv}>
                                <div className={styles.detailOne}>
                                    <div>
                                        <h1>{product.title}</h1>
                                        <span>{product.brand}</span>
                                    </div>
                                    <div>
                                        <h1>{product.currency_symbol} {product.total}</h1>
                                    </div>
                                </div>
                                {!mobileView && (
                                    <div className={styles.detailTwo}>
                                        <p>size:{product.size}</p>
                                        <p>Quantity: {product.quantity}</p>
                                        <p>Product Type</p>
                                        <p style={{ textTransform: 'capitalize' }}>{product.type}</p>
                                    </div>
                                )}
                                {mobileView && (
                                    <div className={styles.detailTwo}>
                                        <p>Product Type</p>
                                        <p style={{ textTransform: 'capitalize' }}>{product.type}</p>
                                        <p>Quantity: {product.quantity}</p>
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
                                    onChange={(e)=> setPoint(e.target.value)}
                                    label={<span className={styles.label}>I found another best product in this price</span>} />
                                <FormControlLabel
                                    value="2"
                                    control={<CustomRadio />}
                                    onChange={(e)=> setPoint(e.target.value)}
                                    label={<span className={styles.label}> Quality issue </span>} />
                                <FormControlLabel
                                    value="3"
                                    control={<CustomRadio />}
                                    onChange={(e)=> setPoint(e.target.value)}
                                    label={<span className={styles.label}>It’s to costly</span>} />
                                <FormControlLabel
                                    value="4"
                                    control={<CustomRadio />}
                                    onChange={(e)=> setPoint(e.target.value)}
                                    label={<span className={styles.label}>Wants to change product</span>} />
                                <FormControlLabel
                                    value="5"
                                    control={<CustomRadio />}
                                    onChange={(e)=> setPoint(e.target.value)}
                                    label={<span className={styles.label}>By mistake order</span>} />
                            </RadioGroup>
                        </div>
                        <div>
                            <CustomTextField
                                className={styles.comment}
                                multiline
                                value={comment}
                                rows={4}
                                onChange={(e)=> setComment(e.target.value)}
                                variant="outlined"
                                placeholder='Additional comments'
                            />
                        </div>
                        {!mobileView ?
                            <div>
                                <Button onClick={on_cancel}>Cancel</Button>
                            </div>
                            :
                            <div>
                                <Button onClick={on_cancel}>Cancel order</Button>
                            </div>
                        }
                    </div>
                </div>

            </section>
        </Container >
    )
}
