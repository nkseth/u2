import React from "react";
import styles from "./Review.module.scss";
import CustomDivider from "../../utils/Custom Divider/divider";
import { Button } from "@material-ui/core";
const Review = () => {
  return (
    <div className={styles.Review}>
      <div className={styles.Review_Top}>
        <div>
          <h2>Canada Goose</h2>
          <p>Rohit bal</p>
        </div>
        <div>
          <p>7 / OCT / 2021</p>
        </div>
      </div>
      <div className={styles.Review_Video}>
        <div>
          <h2>Watch Video</h2>
          <CustomDivider />
        </div>
        <div>
          <iframe
            src="https://www.youtube.com/embed/DkN9VG1HEIM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className={styles.Review_Image}>
        <div>
          <h2>Your Product Pictures</h2>
          <p>See all </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGVudHJlcHJlbmV1cnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="reviweimages1"
          />
          <img
            src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3VpdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="reviweimages2"
          />
          <img
            src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3VpdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="reviweimages3"
          />
          <img
            src="https://images.unsplash.com/photo-1548454782-15b189d129ab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3VpdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="reviweimages4"
          />
        </div>
      </div>
      <div className={styles.Review_Button}>
        <div>
          <h2>Your Action</h2>
          <CustomDivider />
        </div>
        <div>
          <Button>Accept & Confirm</Button>
          <Button>Comment</Button>
        </div>
      </div>
    </div>
  );
};

export default Review;
