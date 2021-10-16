import React, { useEffect } from 'react';
import styles from './TrackOrders.module.scss';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { trackOrders } from '../../Redux/actions/order';

const TrackOrders = () => {
  const orderId = useLocation().pathname.slice(12);
  console.log(orderId);
  const { isAuthenticated, user } = useSelector(state => state.root.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(trackOrders(orderId, user.api_token));
  }, [dispatch, user, orderId]);
  return (
    <div className={styles.TrackOrders}>
      <TimeLine
        date={'Oct, 23 2020'}
        time={'2:00 PM '}
        OrderInfo={'Order confirmed'}
        InfoDescription={'The seller has confirmed your order'}
        className={styles.TrackOrders_Timeline_Dot_First}
        completed={true}
      />
      <TimeLine
        OrderInfo={'Fabric Cutting'}
        InfoDescription={
          'Lorem, ipsu consectetur adipisicing elit. Esse, itaque!'
        }
        completed={true}
      />

      <TimeLine
        OrderInfo={'Pattern Markout & Stitching'}
        InfoDescription={
          '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, itaque!'
        }
        completed={true}
      />
      <TimeLine
        OrderInfo={'Embroidery sampling'}
        InfoDescription={
          '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, itaque!'
        }
        completed={true}
      />
      <TimeLine
        OrderInfo={'Finishing & Draping'}
        InfoDescription={
          'Lorem, ipsum dolor sit amet consectetur adipisicing  consectetur adipisicing elit. Esse, itaque!'
        }
        completed={true}
        button={
          <div>
            <Button>Review/Examine your product</Button>
          </div>
        }
      />
      <TimeLine
        OrderInfo={'Delivery'}
        InfoDescription={
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, itaque!ctetur adipisicing elit. Esse, itaque!'
        }
        completed={false}
      />
    </div>
  );
};

export default TrackOrders;

const TimeLine = ({
  date,
  time,
  OrderInfo,
  InfoDescription,
  className,
  button,
  completed,
}) => {
  return (
    <>
      <div className={`${styles.TrackOrders_Timeline}`}>
        <div className={styles.TrackOrders_Timeline_Time}>
          <p>{date}</p> <p>{time}</p>
        </div>
        <div
          className={`${styles.TrackOrders_Timeline_Dot} ${className} ${
            completed ? 'done' : ''
          } `}
        >
          <span
            className={` ${completed ? 'done' : ''}`}
            style={{ background: `${completed ? '#857250' : '#CECECE'}` }}
          ></span>
        </div>
        <div className={styles.TrackOrders_Timeline_info}>
          <h4 style={{ color: `${completed ? '#857250' : '#6C6C6C'}` }}>
            {OrderInfo}
          </h4>
          <p style={{ color: `${completed ? '#857250' : '#6C6C6C'}` }}>
            {InfoDescription}
          </p>
          {button}
        </div>
      </div>
    </>
  );
};
