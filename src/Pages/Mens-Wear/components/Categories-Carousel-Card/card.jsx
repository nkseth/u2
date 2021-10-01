// import React from "react";
// import { Link } from "react-router-dom";
// import { Button } from "@material-ui/core";
// import styles from "./card.module.scss";
// export default function CategoriesToBagCard({ image, title }) {

//   return (
//     <div className={styles.container}>
//       <div className={styles.innerContainer}>
//         <img src={image} alt='shirt' />
//         <div >
//           <span className={styles.header}>{title}</span>
//           <Link to='/offer'>
//             <Button
//               className={styles.ShopNowBtn}
//               variant='contained'
//               color='default'
//             >
//               Shop Now
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import styles from "./card.module.scss";
export default function CategoriesToBagCard({ image, type, title, slug }) {
  console.log(type, slug);
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <img src={image} alt="shirt" />
        <div>
          <span className={styles.header}>{title}</span>
          <Link to={`/designers-product-page/${type}/${slug}`}>
            <Button
              className={styles.ShopNowBtn}
              variant="contained"
              color="default"
            >
              Shop Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
