import React, {useState} from 'react';
import { Grid, Icon, useMediaQuery } from "@material-ui/core";
import styles from './nav.module.scss';
import image from '../../../Images/image/post.png';
import review from '../../../Images/image/review.png'
import ProductCard from './product';
import ReviewCard from './review'

function Navigation(props) {
    const customView = useMediaQuery("(max-width:1235px)");
    const tabView = useMediaQuery("(max-width:768px)");
    const tabViewPro = useMediaQuery("(max-width:835px)");
    const mobileView = useMediaQuery("(max-width:550px)");
    const [activeNav, setActiveNav] = useState("post");
    console.log(localStorage.getItem('designer'))
    const project =()=>{
      switch(activeNav){
        case "product": return( <div><Grid
          container
          style={{ margin: "auto" , alignItems:"center", width:"90%"}}
          spacing={mobileView ? 1 : tabView ? 2 : 4}
          justify="space-between"

        >
      <Grid item xs={6} sm={4} md={4}>
            <ProductCard />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <ProductCard />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <ProductCard />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <ProductCard />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <ProductCard />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <ProductCard />
          </Grid>
          </Grid>
          <Grid></Grid></div>)
        case "about": return(<div style={{color:"#6C6C6C"}}><div style={{marginTop:30}}>Experience<span style={{marginLeft:50}}>3 Years</span></div>
        <div style={{marginTop:30}}>Location  <span style={{marginLeft:68}}>India</span></div>
        <div style={{marginTop:30}}>Last Delivery <span style={{marginLeft:42}}>3 Hours</span></div>
        </div>)  

        case "review":return( <div><Grid
          container
          style={{ margin: "auto" , alignItems:"center", width:"90%"}}
          spacing={mobileView ? 1 : tabView ? 2 : 4}
          justify="space-between"

        >
      <Grid item xs={12} sm={12} md={12}>
            <ReviewCard />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <ReviewCard />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <ReviewCard />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <ReviewCard />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <ReviewCard />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <ReviewCard />
          </Grid>
          </Grid>
          <Grid></Grid></div>)
      }
    }
    return (
             <div className={styles.mainContainer}>
        <div className={styles.forHimFirstSection}>
         
          {customView && (
            <nav
              className={styles.navBar}
              style={{
                width: mobileView ? "100%" : "85%",
                justifyContent: "center",
                marginTop: mobileView ? ".5rem" : "2rem",
              }}
            >
              <div className={styles.navItems}>
                <span
                  href="#"
                  className={activeNav === "post" && styles.activeNav}
                  onClick={() => {
                    setActiveNav("post")
                  }}
                >
                 
             Post
                </span>
                <span
                  href="/product"
                  className={activeNav === "product" && styles.activeNav}
                  onClick={() => {setActiveNav("product")
                }}
                >
                  Product
                </span>
                <span
                  href="#"
                  className={activeNav === "review" && styles.activeNav}
                  onClick={() => setActiveNav("review")}
                >
                  Review
                </span>
                <span
                  href="#"
                  className={activeNav === "about" && styles.activeNav}
                  onClick={() => setActiveNav("about")}
                >
                  About
                </span>
              </div>
            </nav>
          )}
         
        </div>
        <Grid
          container
          style={{ margin: "0" }}
          spacing={mobileView ? 1 : tabView ? 2 : 4}
          justify="space-between"
          className={styles.secondSection}
        >
          {!customView && (
            <Grid item xs={12} sm={12} md={12}>
              <nav className={styles.navBar}>
                <div className={styles.navItems}>
                  <span
                    href="#"
                    className={activeNav === "post" && styles.activeNav}
                    onClick={() => setActiveNav("post")}
                  >
                   Post
                  </span>
                  <span
                    href="#"
                    className={activeNav === "product" && styles.activeNav}
                    onClick={() => {setActiveNav("product")
            
                }}
                  >
                    Product
                  </span>
                  <span
                    href="#"
                    className={activeNav === "review" && styles.activeNav}
                    onClick={() => setActiveNav("review")}
                  >
                    Review
                  </span>
                  <span
                    href="#"
                    className={activeNav === "about" && styles.activeNav}
                    onClick={() => setActiveNav("about")}
                  >
                    About
                  </span>
                 
                </div>
              </nav>
            </Grid>
          )}
            </Grid>
            <div>{project()}</div>
            </div>
      
    );

}

export default Navigation;