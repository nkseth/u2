import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllMeasurements } from "../../Redux/actions/measurement";
import common_axios from "../../utils/axios.config";
import styles from "./Measurement.module.scss";
const Measurement = () => {
  const dispatch = useDispatch();

  const [measurement_data, set_measurement_data] = useState([]);
  const { measurements } = useSelector((state) => state.root.allMeasurements);
  const { user } = useSelector((state) => state.root.auth);

  useEffect(() => {
    dispatch(getAllMeasurements(user.api_token));
  }, [dispatch, user]);
  // const fetch_data = async () => {
  //   const { data } = await common_axios.get("/show_measurment");
  //   console.log(data);
  // };

  return (
    <div className={styles.Measurement}>
      <div className={styles.Measurement_Box}>
        {measurements?.map((measurement) => {
          return (
            <MeasurementItems
              key={measurement.id}
              background={measurement.url}
              titlename={measurement.name}
              productname="Suits"
              date={measurement.updated_at}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Measurement;

const MeasurementItems = ({ background, titlename, productname, date }) => {
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
            <Link to="/viewmeasurement">View</Link>
          </Button>
          <Button>Delete</Button>
        </div>
      </div>
    </>
  );
};

//For Demo Purpose
const backgroundURL = [
  {
    url: "https://cdn.pixabay.com/photo/2015/03/26/09/40/suit-690048__480.jpg",
  },
  {
    url: "https://cdn.pixabay.com/photo/2017/08/06/20/11/wedding-2595862__340.jpg",
  },
  {
    url: "https://cdn.pixabay.com/photo/2016/11/22/22/25/groom-1850932__340.jpg",
  },
  {
    url: "https://cdn.pixabay.com/photo/2015/03/26/09/41/tie-690084__340.jpg",
  },
];
