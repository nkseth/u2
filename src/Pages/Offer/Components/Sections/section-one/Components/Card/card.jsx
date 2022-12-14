import React from "react";
import styles from "./card.module.scss";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";


export default function HeroCard({ item }) {

  const history = useHistory();


  return (
    <div
      style={{ backgroundImage: `url(${item.cover_image})` }}
      className={styles.container}
    >
      <div>
        <span style={{color:item.title_color}} className={styles.header}>
          {item.description}
        </span>
        {/* <span style={{color:item.title_color}} className={styles.header}>
          {item.name}
        </span> */}
        <Button
          onClick={() => history.push(item.link)}
          className={styles.btn}
          variant="contained"
          color="default"
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
}
