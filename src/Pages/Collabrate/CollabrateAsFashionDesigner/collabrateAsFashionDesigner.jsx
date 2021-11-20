import React, { useState } from 'react';
import { useMediaQuery } from '@material-ui/core';
import Container from '../../../utils/Container/container'
import styles from './collabrateAsFashionDesigner.module.scss';
import WhyU2 from '../Components/WhyU2/whyU2';
import DiscoverSucess from '../Components/DiscoverSuccess/discoverSuccess';
import Breadcrumb from '../../../utils/Breadcrumb/breadcrumb';
import Post from '../Components/Post/post';
import Products from '../Components/Products/products';
import Creators from '../Components/Creators/creators';
import FashionDesignerBanner from '../Components/Banner/FashionBanner/banner';
import CustomSection from '../../../utils/Custom Section/section';
import WhatIsThere from '../Components/WhatIsThere/whatIsThere';
import JoinUs from '../Components/JoinUs/joinUs';


export default function CollabrateAsVendor() {
  const tabView = useMediaQuery('(max-width:835px)');
  const mobileView = useMediaQuery('(max-width:550px)');

  const [open, setOpen] = useState('post');
  const toggle = value => {
    setOpen(value);
    console.log(value);
  };

  return (

    <Container bottomDivider footerOnAllView >
      <FashionDesignerBanner />
      <CustomSection>
        <Breadcrumb path='Home /' activePath='Collabrate' style={{ margin: mobileView ? '10px 0 20px' : '25px 0 56px' }} />
        <div className={styles.section}>
          <p className={styles.heading}>About U2</p>
          {!tabView ?
            <p className={styles.subHeading}>
              U2 is going to be a digital ecosystem which connects among vendors
              and to customers <br /> in the fashion and lifestyle segment.
            </p>
            :
            <p className={styles.subHeading}>
              U2 is going to be a digital ecosystem which connects among vendors
              and to customers  in the fashion and lifestyle segment.
            </p>
          }
        </div>

        <WhyU2 />

      </CustomSection>

      <div className={styles.cardGroup}>
        <Post toggle={toggle} open={open} />
        <Products toggle={toggle} open={open} />
        <Creators toggle={toggle} open={open} />
      </div>

      <CustomSection>

        <DiscoverSucess />

        <WhatIsThere />

        <JoinUs />

      </CustomSection>

    </Container>

  );
}
