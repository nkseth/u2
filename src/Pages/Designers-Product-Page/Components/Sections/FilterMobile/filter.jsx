import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Back from '../../../../../Images/image/back.png';
import Breadcrumb from '../../../../../utils/Breadcrumb/breadcrumb';

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Radio,
  RadioGroup,
  FormControlLabel,
  useMediaQuery,
  Slider,
  TextField,
  InputAdornment,
  OutlinedInput,
  Checkbox,
} from '@material-ui/core';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from './filter.module.scss';
import { style } from '@material-ui/system';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import {
  clearAllFilter,
  clearFilterData,
  storefilterData,
} from '../../../../../Redux/actions/filter-category';
import CheckboxComponents from '../../../../Designers-Product-Page/Components/Sections/Filter/Components/CheckBox';

const CustomRadio = withStyles({
  root: {
    color: '#9D9D9D',
    '&$checked': {
      color: '#857250',
    },
  },
  checked: {},
})(props => <Radio color='default' {...props} />);

const CustomCheckbox = withStyles({
  root: {
    color: '#9D9D9D',
    '&$checked': {
      color: '#857250',
    },
  },
  checked: {},
})(props => <Checkbox color='default' {...props} />);

export default function FilterMobile({ toggle }) {
  return (
    <div className={styles.container}>
      <div className={styles.topnavigation}>
        <img src={Back} onClick={toggle('bottom', false)} />
        <p>Filter</p>
        <p>Reset</p>
      </div>

      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Categories</span>
            <span>All categories</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          <RadioGroup aria-label='Categories'>
            <FormControlLabel
              value='All categories'
              control={<CustomRadio />}
              label={<p className={styles.radioBtnsLabels}>All Categories</p>}
            />
          </RadioGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Item type</span>
            <span>All Items</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          <RadioGroup aria-label='Item type'>
            <FormControlLabel
              value='All'
              control={<CustomRadio />}
              label={<p className={styles.radioBtnsLabels}>All</p>}
            />
            <FormControlLabel
              value='Readymade'
              control={<CustomRadio />}
              label={<p className={styles.radioBtnsLabels}>Readymade</p>}
            />
            <FormControlLabel
              value='Customize'
              control={<CustomRadio />}
              label={<p className={styles.radioBtnsLabels}>Customize</p>}
            />
          </RadioGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Price</span>
            <span>Any price</span>
          </div>
          <span className={styles.clearall}>Clear all</span>
        </AccordionSummary>
        <AccordionDetails
          className={styles.accordionDetials}
          style={{ flexDirection: 'column' }}
        >
          <p className={styles.selectprice}>Select price range</p>
          <Slider
            style={{ color: '#6A5B40', padding: '13px 6px', width: '90%' }}
            // value={10}
            min={0}
            step={1}
            max={19090}
            // marks={10000}
          />
          <br />
          <div className={styles.price}>
            <div style={{ position: 'relative' }}>
              <p className={styles.range}>From</p>
              <input
                type='number'
                min='0'
                name='startPrice'
                placeholder='$400'
              />
            </div>
            <div style={{ position: 'relative' }}>
              <p className={styles.range}>To</p>

              <input
                type='number'
                min='1'
                name='endPrice'
                placeholder='$5000'
              />
            </div>
          </div>
          <RadioGroup aria-label='Price'>
            <FormControlLabel
              value='₹3000 to ₹6,000 (900)'
              control={<CustomRadio />}
              label={
                <p className={styles.radioBtnsLabels}>₹3000 to ₹6,000 (900)</p>
              }
            />
            <FormControlLabel
              value='₹10,000 to ₹15,000 (300)'
              control={<CustomRadio />}
              label={
                <p className={styles.radioBtnsLabels}>
                  ₹10,000 to ₹15,000 (300)
                </p>
              }
            />
            <FormControlLabel
              value='₹20,000 to ₹30,000 (100)'
              control={<CustomRadio />}
              label={
                <p className={styles.radioBtnsLabels}>
                  ₹20,000 to ₹30,000 (100)
                </p>
              }
            />
          </RadioGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Colour</span>
            <span>Brown</span>
          </div>
          <span className={styles.clearall}>Clear all</span>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetials}>
          <RadioGroup aria-label='Colour'>
            <FormControlLabel
              control={<CustomRadio />}
              value='Brown'
              label={
                <div className={styles.colorsLabel}>
                  <div
                    style={{
                      width: '30px',
                      height: '30px',
                      backgroundColor: 'brown',
                      borderRadius: '100%',
                    }}
                  ></div>
                  <p className={styles.radioBtnsLabels}>Brown</p>
                </div>
              }
            />
            <FormControlLabel
              control={<CustomRadio />}
              value='Orange'
              label={
                <div className={styles.colorsLabel}>
                  <div
                    style={{
                      width: '30px',
                      height: '30px',
                      backgroundColor: 'Orange',
                      borderRadius: '100%',
                    }}
                  ></div>
                  <p className={styles.radioBtnsLabels}>Orange</p>
                </div>
              }
            />
          </RadioGroup>
          <span className={styles.more}>
            {' '}
            <a>More</a>{' '}
          </span>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Size</span>
            <span>All sizes</span>
          </div>
        </AccordionSummary>
        <AccordionDetails
          className={styles.accordionDetials}
        ></AccordionDetails>
      </Accordion>

      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Designer</span>
            <span>All Designers</span>
          </div>
        </AccordionSummary>
        <AccordionDetails
          className={styles.accordionDetials}
        ></AccordionDetails>
      </Accordion>

      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Discounts</span>
            <span>All discounts</span>
          </div>
        </AccordionSummary>
        <AccordionDetails
          className={styles.accordionDetials}
        ></AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Fabric</span>
            <span>All fabrics</span>
          </div>
        </AccordionSummary>
        <AccordionDetails
          className={styles.accordionDetials}
        ></AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Sleeve length/type</span>
            <span>All type</span>
          </div>
        </AccordionSummary>
        <AccordionDetails
          className={styles.accordionDetials}
        ></AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Length</span>
            <span>All length</span>
          </div>
        </AccordionSummary>
        <AccordionDetails
          className={styles.accordionDetials}
        ></AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Design/pattern</span>
            <span>All pattern</span>
          </div>
        </AccordionSummary>
        <AccordionDetails
          className={styles.accordionDetials}
        ></AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Shop by occasion</span>
            <span>All</span>
          </div>
        </AccordionSummary>
        <AccordionDetails
          className={styles.accordionDetials}
        ></AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Customer rating</span>
            <span>All rating</span>
          </div>
        </AccordionSummary>
        <AccordionDetails
          className={styles.accordionDetials}
        ></AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          className={styles.accordionSummary}
        >
          <div className={styles.accordionSummaryInnerDiv}>
            <span>Fit</span>
            <span>All Fittings</span>
          </div>
        </AccordionSummary>
        <AccordionDetails
          className={styles.accordionDetials}
        ></AccordionDetails>
      </Accordion>
      <div style={{ padding: '80px 16px 20px 16px' }}>
        <Button className={styles.applybtn}>Apply</Button>
      </div>
    </div>
  );
}
