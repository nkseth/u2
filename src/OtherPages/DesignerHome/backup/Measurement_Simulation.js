import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../Style/Measurement_Simulation.module.scss";
const Measurement_Simulation = () => {
  const { push } = useHistory();
  return (
    <div className={styles.Measurement_Simulation}>
      <div>
        <h1>Measurement {"&"} Simulation</h1>
        <Button onClick={() => push("measurement-and-simulation")}>
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Measurement_Simulation;
