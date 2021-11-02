import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import Container from '../utils/Container/container';
import CustomDivider from '../utils/Custom Divider/divider';
import styles from './Layout.module.scss';
import SideNavbar from '../utils/Side-Navbar/sideNavbar';
import Breadcrumb from '../utils/Breadcrumb/breadcrumb';
import { Button } from '@material-ui/core';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
export default function Layout({
  children,
  title,
  breadcrumbpath,
  breadcrumbactivePath,
}) {
  const tabView = useMediaQuery('(max-width:835px)');
  return (
    <Container
      bottomDivider
      dividerConStyle={{ paddingBottom: 0 }}
      footerOnTabMob
    >
      <section className={styles.section}>
        {!tabView && <SideNavbar />}
        <div className={styles.cardsDivOuterContainer}>
          {tabView && <Breadcrumb path='Home /' activePath='Profile' />}
          <div className={styles.headerDiv}>
            <span className={styles.header}>{title}</span>
            <CustomDivider />
          </div>
          {/* Hello World  */}
          {children}
        </div>
      </section>
    </Container>
  );
}
