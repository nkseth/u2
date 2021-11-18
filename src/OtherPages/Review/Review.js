import React, { useEffect, useState } from 'react';
import styles from './Review.module.scss';
import CustomDivider from '../../utils/Custom Divider/divider';
import { Button, Container, Grid, useMediaQuery } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { get_reviews } from '../../Redux/actions/profile';
import edit from './edit.png';
import ReactStars from "react-rating-stars-component";
import rated from '../../Pages/Product-Description/Components/Details-Tabs/rated.png';
import un_rated from '../../Pages/Product-Description/Components/Details-Tabs/un_rated.png'
import download from '../../Pages/Product-Description/Components/Details-Tabs/download.jpeg'
import Empty from '../../Images/mybag/empty.png';
import { useHistory } from 'react-router-dom';

const Review = () => {
  const mobileView = useMediaQuery('(max-width:550px)');
  const dispatch = useDispatch();
  const { review } = useSelector(state => state.root.profile);
  const history = useHistory()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    dispatch(get_reviews(setLoading));
  }, []);

  const GetDate = ({ val }) => {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const date = new Date(val);

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return <p>{`${day} / ${months[month]} / ${year}`}</p>;
  };


  const editReview = (item) => {
    history.push(`/edit_review/${item.id}`)
  }

  if(loading){
    return null;
  }

  if (review?.data?.length == 0) {
    return (
      <div style={{ width: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', marginTop: 200 }}>
        <div className={styles.emptyBag}>
          <img src={Empty} />
          <div style={{ marginLeft: '16px' }}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
          </div>
        </div>
        <div className={styles.emptyBag} style={{ marginTop: '8px' }}>
          <img src={Empty} />
          <div style={{ marginLeft: '16px' }}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
          </div>
        </div>
        <p style={{ fontFamily: 'DM Serif Display', marginTop: 20, fontSize: 20, textAlign: 'center' }}>No reviews</p>
      </div>
    )
  }

  return (
    <div className={styles.Review}>
      <Grid id='row' container>
        {review.data && review.data.map(item => {
          return (
            <Grid item style={{ padding: 10, borderRadius: 5, border: '1px solid #857250', width: 382, marginRight: 40, marginTop: 20 }}>
              <Grid id='row' justifyContent='space-between' container style={{ alignItems: 'center' }}>
                <Grid item>
                  <p style={{ fontSize: 16, fontFamily: "DM Sans", fontWeight: 'bold' }}>{item.product?.title || 'Product name'}</p>
                </Grid>
                <Grid item>
                  <div onClick={()=> editReview(item)}>
                    <img src={edit} style={{ height: 24, width: 24 }} alt='edit' />
                  </div>
                </Grid>
              </Grid>
              <p style={{ fontSize: 14, color: "#6C6C6C", fontFamily: "DM Sans" }}>{item.created_at}</p>
              <div style={{ marginTop: 10 }}>
                <ReactStars
                  count={5}
                  size={24}
                  value={item.point}
                  edit={false}
                  filledIcon={<img src={rated} style={{ height: 24, width: 24 }} alt='rating' />}
                  emptyIcon={<img src={un_rated} style={{ height: 24, width: 24 }} alt='rating' />}
                  activeColor="#ffd700"
                />
              </div>
              <p style={{ fontFamily: "DM Sans" }}>{item.description || 'It was very nice material and the colours were very vibrant. Absolutely loved it! Giving it 4 stars because the delivery was late.'}</p>
              <div style={{ marginTop: 10 }}>
                <Grid container id='row' className={styles.custom_container} style={{ overflowX: "scroll", flexWrap: "nowrap" }}>
                  {item.images.map((val) => {
                    return (
                      <Grid item style={{ marginRight: 5 }}>
                        <img style={{ height: 66, width: 82, borderRadius: 5 }} src={val.path || download} alt='review_image' />
                      </Grid>
                    )
                  })}
                </Grid>
              </div>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )


  // return (
  //   <div className={styles.Review}>
  //     {review.data &&
  //       review.data.map(item => {
  //         return (
  //           <diz className={styles.Review_Top}>
  //             <div>
  //               <h2>{item.description}</h2>
  //               <p>{item.name}</p>
  //             </div>
  //             <div>
  //               <GetDate val={item.created_at} />
  //             </div>
  //           </diz>
  //         );
  //       })}
  //     <div className={styles.Review_Video}>
  //       {mobileView ? (
  //         <div>
  //           <div>
  //             <h2>Product Name</h2>
  //             <h3>Order Date</h3>
  //           </div>
  //           <div>
  //             <span>Designer Name</span>
  //           </div>
  //         </div>
  //       ) : (
  //         <div>
  //           <h2>Watch Video</h2>
  //           <CustomDivider />
  //         </div>
  //       )}
  //       <div>
  //         <iframe
  //           src='https://www.youtube.com/embed/DkN9VG1HEIM'
  //           title='YouTube video player'
  //           frameborder='0'
  //           allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
  //           allowfullscreen
  //         ></iframe>
  //       </div>
  //     </div>
  //     <div className={styles.Review_Image}>
  //       <div>
  //         <h2>Your Product Pictures</h2>
  //         <p>See all </p>
  //       </div>
  //       <div>
  //         <img
  //           src='https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGVudHJlcHJlbmV1cnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  //           alt='reviweimages1'
  //         />
  //         <img
  //           src='https://images.unsplash.com/photo-1593032465175-481ac7f401a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3VpdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  //           alt='reviweimages2'
  //         />
  //         <img
  //           src='https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3VpdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  //           alt='reviweimages3'
  //         />
  //         <img
  //           src='https://images.unsplash.com/photo-1548454782-15b189d129ab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3VpdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  //           alt='reviweimages4'
  //         />
  //       </div>
  //     </div>
  //     <div className={styles.Review_Button}>
  //       <div>
  //         <h2>Your Action</h2>
  //         <CustomDivider />
  //       </div>
  //       <div
  //         style={{
  //           display: 'flex',
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //         }}
  //       >
  //         {/* <Button>Accept & Confirm</Button> */}
  //         <Button style={{ width: '350px' }}>Comment</Button>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Review;
