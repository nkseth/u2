import React from 'react';
import { Box, Container, useMediaQuery } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import img1 from '../../../Images/collabrate/hero-img.png';
import styles from './aboutUs.module.scss';
// import Header from '../../../utils/Header/header';
// import Breadcrumb from '../../../utils/Breadcrumb/breadcrumb';

const img1 =
  'https://dhaatri.info/storage/images/zFFNbbr86wvrQLUguoqngXTpCafhlTnoJABU6IkB.jpg?p=main_slider';
export default function AboutUs() {
  return (
    <div>
      <Container>
        <Carousel
          autoPlay
          emulateTouch
          infiniteLoop
          showStatus={false}
          showArrows={false}
          showThumbs={false}
        >
          <img src={img1} alt='' />
          <img src={img1} alt='' />
          <img src={img1} alt='' />
        </Carousel>
        <div>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
            nisi, deserunt iure provident blanditiis ipsam hic architecto
            incidunt consectetur quasi eveniet voluptates doloremque laboriosam,
            culpa pariatur suscipit? Quae hic quibusdam voluptatibus enim
            assumenda doloribus pariatur reprehenderit omnis, quia neque earum
            laboriosam sed quod expedita dolorum atque nihil accusamus ut at?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            inventore error assumenda ea quae odit corporis officiis, iste quo
            quam?{' '}
          </p>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            asperiores iure reiciendis ducimus porro sit, laborum quasi
            corrupti. Nulla facere ipsam provident laboriosam dolor recusandae
            explicabo quibusdam possimus architecto perspiciatis?
          </p>
        </div>
      </Container>
    </div>
  );
}
