import {
  Button,
  useMediaQuery,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Drawer,
  withStyles,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import sort from '../../../../Images/image/sort.png';
import filter from '../../../../Images/image/filtering.png';
import styles from './sortFilter.module.scss';
import CustomDivider from '../../../../utils/Custom Divider/divider';
import Close from '../../../../Images/image/closing.png';
import FilterMobile from '../Sections/FilterMobile/filter';

export default function SortFilter() {
  const mobileView = useMediaQuery('(max-width:550px)');
  const [isSortOpen, setSortOpen] = useState(false);
  const [isFilterOpen, setFilterOpen] = useState(false);

  const CustomRadio = withStyles({
    root: {
      color: '#9D9D9D',
      '&$checked': {
        color: '#857250',
      },
    },
    checked: {},
  })(props => <Radio color='default' {...props} />);

  const toggleSortDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setSortOpen(open);
  };

  const toggleFilterDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setFilterOpen(open);
  };

  return (
    <div className={styles.container}>
      {mobileView && (
        <div>
          <Drawer
            anchor={'bottom'}
            open={isSortOpen}
            onOpen={toggleSortDrawer('bottom', true)}
            transitionDuration={600}
          >
            <div className={styles.sortsection}>
              <div>
                <h4 className={styles.label}>Sort</h4>
                <img src={Close} onClick={() => setSortOpen(false)} />
              </div>

              <FormControl style={{ width: '100%' }} component='fieldset'>
                <RadioGroup
                  defaultValue='Best Match'
                  name='radio-buttons-group'
                >
                  <FormControlLabel
                    value='Best Match'
                    control={<CustomRadio />}
                    label={
                      <span className={styles.radioLabel}>Best Match </span>
                    }
                  />
                  <hr className={styles.divider} />
                  <FormControlLabel
                    value='Price: High to Low'
                    control={<CustomRadio />}
                    label={
                      <span className={styles.radioLabel}>
                        Price: High to Low
                      </span>
                    }
                  />
                  <hr className={styles.divider} />
                  <FormControlLabel
                    value='Price: Low to High'
                    control={<CustomRadio />}
                    label={
                      <span className={styles.radioLabel}>
                        {' '}
                        Price: Low to High
                      </span>
                    }
                  />
                  <hr className={styles.divider} />
                  <FormControlLabel
                    value='New Arrivals'
                    control={<CustomRadio />}
                    label={
                      <span className={styles.radioLabel}>New Arrivals</span>
                    }
                  />
                  <hr className={styles.divider} />
                  <FormControlLabel
                    value='Most liked'
                    control={<CustomRadio />}
                    label={
                      <span className={styles.radioLabel}>Most liked</span>
                    }
                  />
                  <hr className={styles.divider} />
                  <FormControlLabel
                    value='Discount: High to Low'
                    control={<CustomRadio />}
                    label={
                      <span className={styles.radioLabel}>
                        Discount: High to Low
                      </span>
                    }
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </Drawer>

          <Drawer
            anchor={'bottom'}
            open={isFilterOpen}
            onClose={toggleFilterDrawer('bottom', false)}
            onOpen={toggleFilterDrawer('bottom', true)}
            transitionDuration={600}
          >
            <FilterMobile filter={isFilterOpen} toggle={toggleFilterDrawer} />
          </Drawer>

          <div style={{ display: 'flex' }}>
            <div
              style={{
                width: '50%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Button
                className={styles.filter}
                onClick={() => setSortOpen(true)}
              >
                <img src={sort} style={{ marginRight: '12px' }} />
                Sort
              </Button>
            </div>

            <div
              style={{
                width: '50%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Button
                className={styles.filter}
                onClick={() => setFilterOpen(true)}
              >
                <img src={filter} style={{ marginRight: '12px' }} alt='' />
                Filter
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
