import React from "react";
import styles from "./hero.module.scss";

export default function HeroSection() {
  const img =
    "https://s3-alpha-sig.figma.com/img/3cfe/7847/10e6b7a4af64070aefb561b25de176c7?Expires=1627862400&Signature=WzjoRoAut1uz3OA6EHSR8KPubx8ruzVopbFxXXBw1Ajh~6ntGZ1iE7Gr9Z9RkrNelbzqc-aETQP-dd8rjQolUqfOBGCsQ~jntgro1dZ3ye3ya9EvLnXxSjJDBuc9PyL-W-e-AbrVLkVMpgZwREdX~NICgxbqcOFBLTTI0IHr~lk3hwxe7v9lE~D-BphWAeOzkQjEwM7NzHvZhD7JKjqYyM9Y4qkonZ~Ahk7gdZQe4HQEWC4xZxiecHY7c0mLh8~mGtu6CcRC2CkrESGEZ9PAax-kTiUrH~B1WRDsgAxa6b9pKLWNIW8mUbaJx7zUDJSdCFTRU7x6~r5ft1GtvtJlhg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={img} alt='design' />
        </div>
        <div className={styles.detailsDiv}>
          <span>Designer Name</span>
          <br />
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled
          </span>
        </div>
      </div>
    </div>
  );
}
