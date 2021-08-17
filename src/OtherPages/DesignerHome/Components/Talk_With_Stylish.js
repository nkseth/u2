import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../Style/Talk_With_Stylish.module.scss";
const Talk_With_Stylish = () => {
  const { push } = useHistory();
  return (
    <div className={styles.Talk_With_Stylish}>
      <div>
        <h1>Talk With Stylish</h1>
        <p>
          Lorem ipspushum dolor sit amet consectetur adipisicing elit. Maxime
          obcaecati nihil repellendus, ab ducimus dolorum eaque accusantium
          similique perferendis architecto pariatur quo, libero illo eos
          consectetur debitis ea sunt inventore.
        </p>
        <Button onClick={() => push("talk-with-stylish")}>chat</Button>
      </div>
    </div>
  );
};

export default Talk_With_Stylish;
