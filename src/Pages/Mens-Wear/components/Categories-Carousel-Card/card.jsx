import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import styles from "./card.module.scss";

export default function CategoriesToBagCard() {
  const img =
    "https://s3-alpha-sig.figma.com/img/2a80/3bbb/2de7771f8ef3810a9df3a79f74a464b8?Expires=1627257600&Signature=MpDhnlc42GJZIghmjj~qEG~QK9czwH8PbfcKlmh7TLUDZiXfJgrkRrY8E2CMJDyQpuBSVZH9xO0ZT~sATgl5vdw06jUp8RtZKsPuuHT2isi5a16s2u9iPSQz8JiyV-LHbW2lKjU6i7rPmVKCc1EKTVQHkFs5PIbgMl3cg1ObjLdm6rr39znwimD6TUp0yl733ZppHy955Dneiy0BJ0Z5K5FURszbY538qK6axCk17I25ZdpcGJx~ACzR25PwoMPFqpCAdHsDK9vPR4ktQLJLJbJ4nMI5C3zCcDTSMa1FmlYtUDsZk2SziYl8vf6C2DHJNQolJKsbDmAO68HN8k8pUA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <img src={img} alt='shirt' />
        <div>
          <span className={styles.header}>Shirts</span>
          <Link to='/offer'>
            <Button
              className={styles.ShopNowBtn}
              variant='contained'
              color='default'
            >
              Shop Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
