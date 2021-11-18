import React, { useEffect, useState } from 'react';
import styles from './TrackOrders.module.scss';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { trackOrders } from '../../Redux/actions/order';
import common_axios from '../../utils/axios.config';
import parse from 'html-react-parser';

const TrackOrders = ({ match }) => {
  const {
    params: { orderId, item_id },
  } = match;

  const { isAuthenticated, user } = useSelector(state => state.root.auth);
  const { trackingData } = useSelector(state => state.root.trackOrder);
  const [delivered, setDelivered] = useState(false);
  const [delivery_data, set_delivery_data] = useState({});

  console.log(
    '🚀 ~ file: TrackOrders.js ~ line 22 ~ TrackOrders ~ trackingData',
    trackingData
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(trackOrders(orderId, user.api_token, item_id));
  }, [dispatch, user, orderId]);

  useEffect(() => {
    trackingData.forEach(item => {
      if (item.order_status_id == 'Delivery') {
        setDelivered(true);
        set_delivery_data(item);
      }
    });
  }, [trackingData]);

  if (trackingData.length == 0) {
    return <h3>Nothing to show, please try after some time</h3>;
  }

  return (
    <div className={styles.TrackOrders}>
      {trackingData.map((item, index) => {
        if (item.order_status_id == 'Delivery') {
          return null;
        }
        return (
          <TimeLine
            date={item.created_at}
            time={item.time || '2:00 PM IST'}
            OrderInfo={item.order_status_id}
            InfoDescription={item.order_item_description}
            className={index == 0 ? styles.TrackOrders_Timeline_Dot_First : ''}
            completed={true}
          />
        );
      })}
      {/* <TimeLine
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
      /> */}
      {trackingData.length > 1 ? (
        <TimeLine
          OrderInfo={'Delivery'}
          date={delivery_data.created_at}
          time={delivery_data.time || '2:00 PM IST'}
          InfoDescription={
            delivery_data.order_item_description ||
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, itaque!ctetur adipisicing elit. Esse, itaque!'
          }
          completed={delivered}
        />
      ) : null}
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
          <p>{date}</p> <span>{time}</span>
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
          <h4 style={{ color: `${completed ? '#0A0A0A' : '#6C6C6C'}` }}>
            {OrderInfo}
          </h4>
          <p style={{ color: `${completed ? '#6C6C6C' : '#6C6C6C'}` }}>
            {InfoDescription && parse(InfoDescription)}
          </p>
          {button}
        </div>
      </div>
    </>
  );
};
