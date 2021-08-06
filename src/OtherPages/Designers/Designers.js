import React from "react";
import styles from "./Designers.module.scss";
const Designers = () => {
  return (
    <div className={styles.Designers}>
      <div className={styles.Designers_Items}>
        {Images.map((data, index) => {
          return (
            <Designers_Box
              key={index}
              DesignerImage={data.avatar}
              background={data.background}
              DesignerName="Designer Name"
              products={"25+"}
              followers={"230k"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Designers;

const Designers_Box = ({
  DesignerImage,
  DesignerName,
  background,
  products,
  followers,
}) => {
  return (
    <div
      style={{
        background: `linear-gradient(#000000b2, #000000b2),
    url(${background})`,
      }}
      className={styles.Designers_Box}
    >
      <div className={styles.Designers_Image}>
        <img src={DesignerImage} alt={DesignerName} />
      </div>
      <div className={styles.Designers_Name}>
        <h3>{DesignerName}</h3>
      </div>
      <div className={styles.Designers_Bottom}>
        <div>
          <span>{products}</span>
          <span>Products</span>
        </div>
        <div>
          <span>{followers}</span>
          <span>Followers</span>
        </div>
      </div>
    </div>
  );
};

//These Data For Demo Purpose Only
const Images = [
  {
    avatar:
      "https://cdn.pixabay.com/photo/2017/02/04/12/25/man-2037255__340.jpg",
    background:
      "https://cdn.pixabay.com/photo/2015/11/04/20/59/milky-way-1023340__340.jpg",
  },
  {
    avatar:
      "https://cdn.pixabay.com/photo/2015/01/08/18/30/man-593372__340.jpg",
    background:
      "https://cdn.pixabay.com/photo/2015/11/07/12/02/business-1031754__340.jpg",
  },
  {
    avatar:
      "https://cdn.pixabay.com/photo/2015/07/20/12/57/ambassador-852766__340.jpg",
    background:
      "https://cdn.pixabay.com/photo/2015/01/09/11/11/office-594132__340.jpg",
  },
  {
    avatar:
      "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__340.jpg",
    background:
      "https://cdn.pixabay.com/photo/2016/11/29/05/55/adult-1867665__340.jpg",
  },
  {
    avatar:
      "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__340.jpg",
    background:
      "https://cdn.pixabay.com/photo/2015/11/04/20/59/milky-way-1023340__340.jpg",
  },
  {
    avatar:
      "https://cdn.pixabay.com/photo/2015/01/08/18/30/man-593372__340.jpg",
    background:
      "https://cdn.pixabay.com/photo/2015/11/07/12/02/business-1031754__340.jpg",
  },
  {
    avatar:
      "https://cdn.pixabay.com/photo/2016/05/23/23/32/human-1411499__340.jpg",
    background:
      "https://cdn.pixabay.com/photo/2015/01/09/11/11/office-594132__340.jpg",
  },
  {
    avatar:
      "https://cdn.pixabay.com/photo/2016/01/19/18/04/man-1150058__340.jpg",
    background:
      "https://cdn.pixabay.com/photo/2014/06/04/16/36/man-362150__340.jpg",
  },
  {
    avatar:
      "https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646__340.jpg",
    background:
      "https://cdn.pixabay.com/photo/2020/04/04/03/07/lake-5000642__340.jpg",
  },
];
