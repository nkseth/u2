import React from "react";
import { Link } from "react-router-dom";
import styles from "./card.module.scss";

function MegaMenuCard({ background, title, categories, type }) {
  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: "url(" + background + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <CardOverlay title={title} categories={categories} type={type} />
    </div>
  );
}

export default MegaMenuCard;

function CardOverlay({ title, categories, type }) {
  return (
    <div className={styles.CardOverlay}>
      <p className={styles.title}>{title}</p>
      <p className={styles.p}>
        {categories.map((item) => {
          return (
            <>
              <Link
                to={{
                  pathname: `/designers-product-page/${type}/${item.slug}`,
                }}
              >
                {item.name}
              </Link>
              <br />
            </>
          );
        })}
      </p>
    </div>
  );
}
