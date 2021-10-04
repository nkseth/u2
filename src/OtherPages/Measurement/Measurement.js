import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteMeasurement,
  getAllMeasurements,
} from "../../Redux/actions/measurement";
import Loader from "../../utils/Loader/Loader";
import styles from "./Measurement.module.scss";
const Measurement = () => {
  const dispatch = useDispatch();

  const { measurements } = useSelector((state) => state.root.allMeasurements);
  const { user } = useSelector((state) => state.root.auth);
  console.log(measurements);
  useEffect(() => {
    dispatch(getAllMeasurements(user.api_token));
  }, [dispatch, user]);

  return (
    <div className={styles.Measurement}>
      {measurements.length < 1 ? (
        <Loader />
      ) : (
        <div className={styles.Measurement_Box}>
          {measurements?.map((measurement) => {
            return (
              <MeasurementItems
                key={measurement.id}
                id={measurement.id}
                background={measurement.url}
                titlename={measurement.name}
                productname="Suits"
                date={measurement.updated_at}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Measurement;

const MeasurementItems = ({ id, background, titlename, productname, date }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.root.auth);
  const deleteMeasurementDataHandle = (e) => {
    e.preventDefault();
    dispatch(deleteMeasurement(user.api_token, id));
    dispatch(getAllMeasurements(user.api_token));
  };
  return (
    <>
      <div
        style={{
          background: `linear-gradient(#000000ad,#000000ad),url(${background})`,
        }}
        className={styles.Measurement_Item}
      >
        <div>
          <h2>{titlename}</h2>
          <h3>{productname}</h3>
          <p>Date: {date}</p>
        </div>
        <div>
          <Button>
            <Link to={`/viewmeasurement/view/${id}`}>View</Link>
          </Button>
          <Button onClick={deleteMeasurementDataHandle}>Delete</Button>
        </div>
      </div>
    </>
  );
};
