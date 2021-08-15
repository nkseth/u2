import React, { useState } from "react";
import { Button } from "@material-ui/core";
import styles from "./product.module.scss";
import Product from '../../../Images/image/Product.png'


export default function ProductCard() {
  const img =
    "https://s3-alpha-sig.figma.com/img/3c07/019f/e583cf926e4eb5ac2e00ddbc589a945a?Expires=1627257600&Signature=U6CnscpLq5N6EU5SzjU5Mv0U2HjvMMv024ifBJT6y-CV050LIZdGyimCsWjmfjavlfZMwDl~8nQa37gOPDhW-JdXKxMjE9PfoTJ5SrCNr~C2fJXM-WmLKjnI3Ruq8ojRFSJrK~zmFboVZftVBsY39s6VXYVE9wg0V7Sl2lygnNj5OM9H1-e6wvbBX~OcNuvIhAOPfNlbO1JKOVjrHzikmJAmxlXFtraKho7FR1xwS3N8zB3nNiU4woyRsk4syOkhGQc3fN2JajLcnLU5Kj6BosQVlg~XI2IDJj7aF7x7VdT0WNH7DVjE~NP0877cc470~biefr95~tfbSqHMtyurtA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={Product} alt='product' />
      </div>
      <div className={styles.productDetails}>
        <span className={styles.productName}>Title of style Guide</span>
        <span className={styles.productDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
         pariatur aliquid non, nobis consequuntur sunt, soluta ex similique, dignissimos debitis nam rem voluptates
          blanditiis dolor delectus reiciendis ea omnis ut.</span>
          {/* <div style={{backgroundColor:"#857250",width: "140px",height: "38px",top:" 5px",color:"white", textAlign:"center"}}>
        Read More</div> */}
        <Button style={{backgroundColor:"#857250",color:"white", width:165}}>Read More</Button>
      </div>
    </div>
  );
}
