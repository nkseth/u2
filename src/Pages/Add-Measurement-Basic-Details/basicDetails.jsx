import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { IconButton, Button, Grid } from '@material-ui/core';
import cx from 'classnames';
import Container from '../../utils/Container/container';
import Breadcrumb from '../../utils/Breadcrumb/breadcrumb';
import InputField from './Components/Input-Field/inputField';
import styles from './basicDetails.module.scss';
//images
import Male from '../../Images/gender/male.svg';
import { useSelector, useDispatch } from 'react-redux';
import {
  set_basic_details,
  set_basic_id,
} from '../../Redux/actions/measurement';
import common_axios from '../../utils/axios.config';

export default function AddMeasurementBasicDetails() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { gender, basic_details } = useSelector(
    state => state.root.measurement
  );
  const { user_data } = useSelector(state => state.root.main);

  const { name, age, height, weight } = basic_details;

  const onSubmit = async () => {
    if (name.length == 0) {
      alert('Enter a valid name');
      return;
    }

    if (age.length == 0) {
      alert('Enter a valid age');
      return;
    }

    if (height.length == 0) {
      alert('Enter a valid height');
      return;
    }

    if (weight.length == 0) {
      alert('Enter a valid weight');
      return;
    }

    try {
      const { data } = await common_axios.post('/save_measurment', {
        gender,
        name,
        age: parseInt(age),
        height: parseInt(height),
        weight: parseInt(weight),
        standard_size: 1,
        user_id: user_data.id,
      });
      dispatch(set_basic_id(data));
      history.push(`/add-measurement-body-measurement-${gender}`);
    } catch (e) {
      console.log(e.response?.data);
    }
  };

  return (
    <Container bottomDivider footerOnTabMob>
      <section className={styles.section}>
        <Breadcrumb
          path='Home / Men / Product name/ customise / Simulation /'
          activePath='Measurements'
        />
        <div className={styles.header}>Add measurement</div>
        <div className={styles.genderContainer}>
          <div item sm={12} md={6} style={{ height: '514px' }}>
            <iframe
              width='100%'
              height='100%'
              src='https://www.youtube.com/embed/gwuV_JNm-xA?list=RDgwuV_JNm-xA'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
          <div className={styles.detailsDiv}>
            <span className={styles.detailsHeader}>Basic Details</span>
            <div className={styles.inputFieldDiv}>
              <div>
                <InputField
                  value={name}
                  setValue={val =>
                    dispatch(set_basic_details({ ...basic_details, name: val }))
                  }
                  label='Name'
                />
                <InputField
                  value={age}
                  setValue={val =>
                    dispatch(set_basic_details({ ...basic_details, age: val }))
                  }
                  label='Age'
                />
              </div>
              <div>
                <InputField
                  value={height}
                  setValue={val =>
                    dispatch(
                      set_basic_details({ ...basic_details, height: val })
                    )
                  }
                  label='Height'
                />
                <InputField
                  value={weight}
                  setValue={val =>
                    dispatch(
                      set_basic_details({ ...basic_details, weight: val })
                    )
                  }
                  label='Weight'
                />
              </div>
            </div>
            <div className={styles.buttonDiv}>
              <Button className={styles.nextButton} onClick={() => onSubmit()}>
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
