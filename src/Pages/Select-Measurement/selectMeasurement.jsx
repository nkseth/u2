import React, { useEffect, useState } from 'react';
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
import { Link, useHistory } from 'react-router-dom';

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
  const [value, setValue] = React.useState(null);
  const [orders, setOrders] = useState([])
  const history = useHistory()
  const handleChange = event => {
    setValue(event.target.value);
  };
  const { info, loading, error } = useSelector(state => state.root.payment);
  console.log(
    '🚀 ~ file: selectMeasurement.jsx ~ line 37 ~ SelectMeasurement ~ info',
    info.id
  );

  useEffect(() => {
    fetch_orders()
  }, [])

  const fetch_orders = async () => {
    try {
      const { data } = await common_axios.get('/orders')
      console.log(data)
      if (data.data) {
        data.data.forEach((item) => {
          if (item.order_status_id === 10) {
            setOrders(item.items)
          }
        })
      }
    } catch (e) {
      console.log()
    }

  }

  const onNav = () => {
    if(!value){
      alert("Please choose an Item");
      return;
    }

    history.push(`/add-measurement-choose-standard-size/${info.id}/${value}`)
  }

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
              {orders.map((item) => {
                return (
                  <FormControlLabel
                    className={styles.check_card}
                    value={item.id}
                    control={<Checkbox />}
                    label={<Card data={item} />}
                  />
                )
              })}
            </FormGroup>
          </ThemeProvider>
        </div>

        <div className={styles.btn_group}>
          <Button onClick={onNav}>
              Add Measurement
          </Button>
        </div>
      </CustomSection>
    </Container>
  );
}
