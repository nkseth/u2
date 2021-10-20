import { useMediaQuery } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import Breadcrumb from "../../utils/Breadcrumb/breadcrumb";
import Container from "../../utils/Container/container";
import styles from "./UploadImage.module.scss";
// Images
import Main from "./images/main.svg";
import Back from "./images/back.svg";
import Front from "./images/front.svg";
import { useHistory } from "react-router";
import common_axios from "../../utils/axios.config";

const UploadImage = ({
  match: {
    params: { basic_id },
  },
}) => {
  const history = useHistory();
  const { gender, upper_body, lower_body } = useSelector(
    (state) => state.root.measurement
  );
  const tabView = useMediaQuery("(max-width:768px)");
  const tabViewPro = useMediaQuery("(max-width:835px)");
  const mobileView = useMediaQuery("(max-width:550px)");

  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  const uploadedImage2 = React.useRef(null);
  const imageUploader2 = React.useRef(null);

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  console.log(image1, image2);
  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
        setImage1(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleImageUpload2 = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage2;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
        setImage2(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const imageUploadHandler = async (e) => {
    e.preventDefault();
    if (!image1) return alert("Upload Front Image.");
    if (!image2) return alert("Upload Back Image.");
    if (image1 === image2)
      return alert("Cannot have same image for both front and back");

    try {
      const { data } = await common_axios.post(`/save_measurment_image`, {
        measurements_basic_id: basic_id,
        image: image1,
        back_image: image2,
      });
      console.log(data);
      if (data) {
        alert("Upload Successfull...");
        history.push(`/viewmeasurement/save/${basic_id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container bottomDivider footerOnTabMob>
      <section className={styles.section}>
        <div style={{ padding: mobileView && "0 1rem", marginTop: "2rem" }}>
          <Breadcrumb
            path={`Home / ${gender === "male" ? "Men" : "Women"} /Measurement`}
            activePath="/Image Upload"
          />
        </div>
        <div className={styles.main}>
          <div style={{ textAlign: "center" }}>
            <img src={Main} alt="" />
            <h1>Upload Images</h1>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
            harum similique quas perspiciatis quam dicta doloribus?
          </p>
          <div className={styles.content}>
            <div className={styles.front}>
              <img
                ref={uploadedImage}
                src={Front}
                alt=""
                onClick={() => imageUploader.current.click()}
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={imageUploader}
                style={{
                  display: "none",
                }}
              />
              <p style={{ textAlign: "center" }}>Front</p>
            </div>
            <div className={styles.back}>
              <img
                src={Back}
                ref={uploadedImage2}
                alt=""
                onClick={() => imageUploader2.current.click()}
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload2}
                ref={imageUploader2}
                style={{
                  display: "none",
                }}
              />
              <p style={{ textAlign: "center" }}>Back</p>
            </div>
          </div>
          {
            <button className={styles.btn} onClick={imageUploadHandler}>
              Add
            </button>
          }
        </div>
      </section>
    </Container>
  );
};

export default UploadImage;
