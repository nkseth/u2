import React, { useState, useRef } from 'react';
import ReactStars from 'react-rating-stars-component';
import styles from '../orders.module.scss';
import { Grid, Button, IconButton, useMediaQuery } from '@material-ui/core';
import { ReactComponent as CameraIcon } from '../../../Images/icons/camera.svg';
import common_axios from '../../../utils/axios.config';

function Rating({ item, id, set_is_reviewed }) {
  const [point, setPoint] = useState('');

  const [review, setReview] = useState('');
  const [image, setImage] = useState({});
  const image_ref = useRef();

  const _onChange = e => {
    setImage(e.target.files[0]);
  };

  const on_submit = async () => {
    let form = new FormData();
    form.append('product_id', id);
    form.append('point', point);
    form.append('description', review);
    try {
      const { data } = await common_axios.post(
        '/product_review',
        {
          form,
        },
        {
          headers: {
            'content-type': 'multipart/form-data',
          },
        }
      );
      console.log(data);
      set_is_reviewed(item.id);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className={styles.productRatingDiv}>
        <span>Rate this product</span>
        <ReactStars
          value={point}
          onChange={e => setPoint(e)}
          size={40}
          edit={true}
        />
      </div>
      <div className={styles.productReviewDiv}>
        <span>Review this product</span>
        <textarea
          value={review}
          onChange={e => setReview(e.target.value)}
          row={5}
          placeholder='Write your review'
        />
      </div>
      <div className={styles.addImgDiv}>
        <div>
          <input
            ref={image_ref}
            accept='image/*'
            type='file'
            id='addImg'
            onChange={_onChange}
          />
          <label htmlFor='addImg'>
            <IconButton aria-label='add image' component='span'>
              <CameraIcon />
            </IconButton>
          </label>
        </div>
        <span>Add image here</span>
      </div>
      <Button
        onClick={on_submit}
        variant='text'
        color='default'
        className={styles.button}
      >
        Submit
      </Button>
    </>
  );
}

export default Rating;
