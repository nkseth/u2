import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Measurement.module.scss";
const Measurement = () => {
  return (
    <div className={styles.Measurement}>
      <div className={styles.Measurement_Box}>
        {backgroundURL.map((data, index) => {
          return (
            <MeasurementItems
              key={index}
              background={data.url}
              titlename="Rohith"
              productname="Suits"
              date={new Date().toLocaleDateString()}
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
            <Link to="viewmeasurement">View</Link>
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
