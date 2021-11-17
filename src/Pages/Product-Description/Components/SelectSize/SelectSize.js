import React, { useState } from 'react';
import styles from './SelectSize.module.scss';
import {
  Button,
  IconButton,
  Radio,
  Select,
  useMediaQuery,
} from '@material-ui/core';
function SelectSize({ variant }) {
  console.log(
    '🚀 ~ file: SelectSize.js ~ line 11 ~ SelectSize ~ variant',
    variant
  );
  const [size, setSize] = useState('xs');
  const customView = useMediaQuery('(max-width:1044px)');
  const tabView = useMediaQuery('(max-width:768px)');
  const mobileView = useMediaQuery('(max-width:550px)');

  return (
    <div className={styles.container}>
      <h4 className={styles.heading_1}>Select Size</h4>
      <div className={styles.radioBtnDiv}>
        {variant?.map(({ name, id }) => (
          <IconButton
            key={id}
            className={
              size === name ? styles.BtnSelected : styles.radioBtnOutline
            }
            onClick={() => setSize(name)}
          >
            {name}
          </IconButton>
        ))}
        {/* <IconButton
          className={
            size === "xs" ? styles.BtnSelected : styles.radioBtnOutline
          }
          onClick={() => setSize("xs")}
        >
          XS
        </IconButton>
        <IconButton
          className={size === "s" ? styles.BtnSelected : styles.radioBtnOutline}
          onClick={() => setSize("s")}
        >
          S
        </IconButton>
        <IconButton
          className={size === "m" ? styles.BtnSelected : styles.radioBtnOutline}
          onClick={() => setSize("m")}
        >
          M
        </IconButton>
        <IconButton
          className={size === "l" ? styles.BtnSelected : styles.radioBtnOutline}
          onClick={() => setSize("l")}
        >
          L
        </IconButton>
        <IconButton
          className={
            size === "xl" ? styles.BtnSelected : styles.radioBtnOutline
          }
          onClick={() => setSize("xl")}
        >
          XL
        </IconButton>
        <IconButton
          className={
            size === "xxl" ? styles.BtnSelected : styles.radioBtnOutline
          }
          onClick={() => setSize("xxl")}
        >
          XXL
        </IconButton> */}
      </div>
    </div>
  );
}

export default SelectSize;
