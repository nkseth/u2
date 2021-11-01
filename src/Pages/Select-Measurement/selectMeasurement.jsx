import React, { useEffect } from 'react';
import {
  Checkbox,
  createMuiTheme,
  FormControlLabel,
  FormGroup,
  useMediaQuery,
  Button,
} from '@material-ui/core';
import Container from '../../utils/Container/container';
import CustomSection from '../../utils/Custom Section/section';
import Breadcrumb from '../../utils/Breadcrumb/breadcrumb';
import styles from './selectMeasurement.module.scss';
import CustomDivider from '../../utils/Custom Divider/divider';
import Card from './Components/Card';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import common_axios from '../../utils/axios.config';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({});

const Theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#6A5B40 !important',
    },
  },
});

export default function SelectMeasurement() {
  const mobileView = useMediaQuery('(max-width:550px)');
  const [value, setValue] = React.useState('A');
  const handleChange = event => {
    setValue(event.target.value);
  };
  const { info, loading, error } = useSelector(state => state.root.payment);
  console.log(
    '🚀 ~ file: selectMeasurement.jsx ~ line 37 ~ SelectMeasurement ~ info',
    info.id
  );

  return (
    <Container style={{ paddingBottom: '40px' }}>
      <CustomSection
        style={mobileView ? { marginTop: '0' } : { marginTop: '3em' }}
      >
        {!mobileView && (
          <Breadcrumb path='Home' activePath='/ Explore top designers' />
        )}

        <div className={styles.headerDiv}>
          <span className={styles.header}>Select for measurement</span>
          <CustomDivider className={styles.divider} />
        </div>

        <div className={styles.card_group}>
          <ThemeProvider theme={Theme}>
            <FormGroup value={value} onChange={handleChange}>
              <FormControlLabel
                className={styles.check_card}
                value='A'
                control={<Checkbox />}
                label={<Card />}
              />
              <FormControlLabel
                className={styles.check_card}
                value='B'
                control={<Checkbox />}
                label={<Card />}
              />
            </FormGroup>
          </ThemeProvider>
        </div>

        <div className={styles.btn_group}>
          <Button>
            <Link to={`/add-measurement-choose-standard-size/${info.id}`}>
              Add Measurement
            </Link>
          </Button>
        </div>
      </CustomSection>
    </Container>
  );
}
