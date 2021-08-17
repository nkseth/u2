import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./card.module.scss";

export default function SizesCard({ fitImg, fitType, fitDescription }) {
  const [isClicked, setClicked] = useState(false);
  return (
    <motion.div
      className={styles.container}
      whileHover={{
        scaleY: 1.2,
        scaleX: 1.1,
        transition: { duration: 0.4 },
      }}
      style={{
        transform: isClicked ? "scale(1.2)" : "scale(1.1)",
        transition: "transform 0.4s ease-in-out",
      }}
      onClick={() => setClicked(!isClicked)}
    >
      <img src={fitImg} alt='fit' />
      <div>
        <span className={styles.fitType}>{fitType}</span>
        <span className={styles.fitDescription}>{fitDescription}</span>
      </div>
    </motion.div>
  );
}
