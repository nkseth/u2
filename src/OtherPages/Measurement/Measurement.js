import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteMeasurement,
  getAllMeasurements,
} from "../../Redux/actions/measurement";
import { ReactComponent as MeasurementIcon } from "./measurement.svg";
import Loader from "../../utils/Loader/Loader";
import styles from "./Measurement.module.scss";
import { SuccessPopUp } from "../../utils/Popups/SuccessPopup";

const Measurement = () => {
  const dispatch = useDispatch();
  const [measurement_data, set_measurement_data] = useState([]);
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
      {/* <div
        style={{
          display: "grid",
          placeItems: "center",
          margin: "1rem 0",
        }}
      >
        <Link to="/add-measurement-choose-standard-size/494">
          <Button
            style={{
              background: "#857250",
              color: "white",
              width: "220px",
              height: "50px",
              margin: "auto",
            }}
          >
            <MeasurementIcon style={{ marginRight: "0.4rem" }} />
            <h5> Add Measurement </h5>
          </Button>
        </Link>
      </div> */}
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
  const [deleteModal, setDeleteModal] = useState(false);
  const toggleModal = () => {
    setDeleteModal((deleteModal) => !deleteModal);
  };
  return (
    <>
      {deleteModal && (
        <SuccessPopUp toggle={toggleModal} width={"500px"} height={"100px"}>
          <h2 style={{ margin: "1rem 0" }}>
            Are you sure you want to remove this Item?
          </h2>
          <Button
            class={styles.removeModelButton}
            onClick={(e) => {
              deleteMeasurementDataHandle(e);
              toggleModal();
            }}
          >
            Yes
          </Button>
          <Button
            class={styles.removeModelButton}
            onClick={() => {
              toggleModal();
            }}
          >
            No
          </Button>
        </SuccessPopUp>
      )}
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
          <Button onClick={toggleModal}>Delete</Button>
        </div>
      </div>
    </>
  );
};
