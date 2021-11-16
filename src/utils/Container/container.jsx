import React, { useEffect, useLayoutEffect } from 'react';
import { useMediaQuery } from '@material-ui/core';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import CustomDivider from '../Custom Divider/divider';
import CustomSection from '../Custom Section/section';
import BottomNavigation from '../MobileBottomNavigation/BottomNavigation';
import { useLocation } from 'react-router';
import SortFilter from '../../Pages/Designers-Product-Page/Components/MobileSortFilter/sortFilter'

export default function Container(props) {
  const tabView = useMediaQuery('(max-width:768px)');
  const tabViewPro = useMediaQuery('(max-width:835px)');
  const view830 = useMediaQuery('(max-width:830px)');
  const mobile = useMediaQuery('(max-width:480px)');
  return (
    <div style={props.style}>
      <Header />
      {props.children}
      {props.footerOnAllView && <Footer />}
      {props.footerOnTabMob && tabView && !props.footerOnAllView && <Footer />}
      {mobile && <BottomNavigation />}
      {props.sortFilter && <SortFilter />}
    </div>
  );
}
