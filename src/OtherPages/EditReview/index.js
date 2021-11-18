import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import OrdersCard from '../../Pages/All-Orders/Components/Order-Card/card';
import styles from './style.module.scss';
import ReactStars from 'react-rating-stars-component';
import gallery from '../../Images/image/gallery.png';
// import camera from '../../Images/image/camera.png';
import post from '../../Images/image/post.png';
import { Button, Grid, TextField, useMediaQuery } from '@material-ui/core';
import rated from '../../Pages/Product-Description/Components/Details-Tabs/rated.png';
import un_rated from '../../Pages/Product-Description/Components/Details-Tabs/un_rated.png'
import download from '../../Pages/Product-Description/Components/Details-Tabs/download.jpeg'
import common_axios from '../../utils/axios.config';
import { useHistory } from 'react-router-dom';

const EditReview = ({ match }) => {

    const id = match?.params?.id;
    const history = useHistory()

    const [review, setReview] = useState('')
    const [images, setImages] = useState([1, 2, 3, 4, 5]);
    const [point, setPoint] = useState(0)
    const [review_data, set_review_data] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch_data()
    }, [match])

    const fetch_data = async () => {
        try {
            const { data } = await common_axios.get(`/get_product_review/${id}`)
            if (data.data) {
                setImages(data.data.images)
                set_review_data(data.data)
                setPoint(data.data.point)
                setReview(data.data?.description ? data.data?.description : '')
            }
            setLoading(false)
        } catch (e) {
            console.log(e)
            setLoading(false)
        }

    }

    const onUpdate = async () => {
        console.log(point)
       if(point < 1){
           alert("Rating can't be zero");
           return;
       }

       try{
           const { data } = await common_axios.post('/product_review_update',{
               product_id:review_data.product.id,
               point,
               description:review
           })

           alert('Updated successfully');
           goBack()
       } catch (e){
           console.log(e)
           alert("An error occured")
       }
    }

    const goBack = (item) => {
        history.push(`/review`)
      }

    if(loading){
        return(
            null
        )
    }


    return (
        <div style={{paddingBottom:50}}>
            <Grid container id='row' spacing='2'>
                <Grid item>
                    <img src={review_data.product?.cover_image} style={{ height: '143px', width: '132px' }} alt='product_image' />
                </Grid>
                <Grid item>
                    <div style={{ maxWidth: '263px' }}>
                        <p style={{ fontFamily: 'DM Sans', fontWeight: 'bold', fontSize: 16, lineHeight: '20px' }}>{review_data?.product?.title}</p>
                        <p style={{ color: "#6C6C6C", fontSize: 12, fontFamily: "DM Sans", marginTop: 4, lineHeight: '16px' }}>{review_data?.product?.brand}</p>
                        <Grid container id='row' style={{ marginTop: 9 }}>
                            <Grid item><p style={{ color: "#3B3B3B", fontFamily: "DM Sans", fontSize: 12, fontWeight: 'bold', lineHeight: '16px' }}>Quantity: </p></Grid>
                            <Grid style={{ marginLeft: '5px' }} item><p style={{ color: "#0A0A0A", fontFamily: "DM Sans", fontSize: 14, fontWeight: 'bold', lineHeight: "18px" }}>01</p></Grid>
                        </Grid>
                        <p style={{ color: "#0A0A0A", fontFamily: "DM Serif Display", fontSize: 28, fontWeight: '400', marginTop: '7px', lineHeight: '36px' }}>₹{review_data?.product?.custom_price ? review_data?.product?.custom_price : review_data?.product?.readymade_price}</p>
                    </div>
                </Grid>
            </Grid>
            <p style={{ fontSize: '20px', fontFamily: "DM Serif Display", marginTop: '33px', lineHeight: '28px' }}>Rate this product</p>
            <div style={{ marginTop: '26px', marginLeft: -5 }}>
                <ReactStars
                    count={5}
                    size={35}
                    onChange={(e) => setPoint(e)}
                    value={point}
                    edit={true}
                    filledIcon={<img src={rated} style={{ height: 35, width: 35, marginRight: 15 }} alt='rating' />}
                    emptyIcon={<img src={un_rated} style={{ height: 35, width: 35, marginRight: 15 }} alt='rating' />}
                    activeColor="#ffd700"
                />
            </div>
            <div style={{ marginTop: "20px" }}>
                <p style={{ fontFamily: "DM Serif Display", fontSize: "20px", lineHeight: '28px' }}>Review this product</p>
                <textarea placeholder='Enter review' value={review} onChange={(e) => setReview(e.target.value)} style={{ height: '140px', width: '70%', marginTop: "15px", padding: '10px', fontFamily: "DM Sans", outline: 'none' }} />
            </div>
            <div style={{ marginTop: '25px' }}>
                <Grid container id='row' alignItems='center'>
                    <Grid item>
                        <div style={{ height: '5rem', width: '99px', backgroundColor: "#E6E3DC", borderRadius: "10px", display: "flex", justifyContent: 'center', alignItems: "center" }}>
                            <img src={gallery} style={{ height: '35px', width: '35px' }} />
                        </div>
                    </Grid>
                    <Grid>
                        <p style={{ fontSize: '16px', fontFamily: "DM Sans", fontWeight: "bold", marginLeft: '15px' }}>Add image here</p>
                    </Grid>
                </Grid>
            </div>
            <div style={{ marginTop: 25 }}>
                <Grid container id='row' className={styles.custom_container} style={{ overflowX: "scroll", flexWrap: "nowrap" }}>
                    {images.map((val) => {
                        return (
                            <Grid item style={{ marginRight: 5 }}>
                                <img style={{ height: 118, width: 147, borderRadius: 5 }} src={val.path || download} alt='review_image' />
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
            <Button onClick={onUpdate} variant='contained' size='large' style={{ backgroundColor: "#6A5B40", color: "white", height: 48, minWidth: "150px", width: '20%', marginTop: '25px' }}>Update</Button>
        </div>
    )
};

export default EditReview;
