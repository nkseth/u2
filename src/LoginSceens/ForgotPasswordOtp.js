import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import styles from './style/ForgotPasswordOtp.module.scss';
import OtpInput from 'react-otp-input';
import useLogin from './useLogin';
import { useSelector, useDispatch } from 'react-redux';
import common_axios from '../utils/axios.config';
import { setForgotData } from '../Redux/actions/auth';

const ForgotPasswordOtp = () => {
  const { login_Mode_Handler } = useLogin();
  const { forgot_data } = useSelector(state => state.root.main);
  const [otp, setOtp] = useState('');
  const dispatch = useDispatch();

  const getStarted = async () => {
    if (otp.length != 4) {
      alert('Enter a valid OTP');
      return;
    }

    dispatch(setForgotData({ ...forgot_data, otp }));
    login_Mode_Handler('CreateNewPassword');

    // const { data } = await common_axios.post("")
  };

  return (
    <form className={styles.ForgotPasswordOtp}>
      <div className={styles.ForgotPasswordOtp_Title}>
        <h1>OTP Verification</h1>
        <p>
          Please enter the OTP sent to number {forgot_data.value}
          <b>
            <Link style={{ color: '#0000EE' }}>change</Link>
          </b>
        </p>
      </div>

      <div className={styles.ForgotPasswordOtp_OTP}>
        <OtpInput
          containerStyle={{ display: 'flex', justifyContent: 'space-evenly' }}
          inputStyle={{ color: '#6c6c6c', fontSize: '16px' }}
          numInputs={4}
          errorStyle='error'
          onChange={event => setOtp(event)}
          separator={<span>{'  '}</span>}
          isInputNum={true}
          value={otp}
          name='otp'
        />
      </div>
      <div className={styles.ForgotPasswordOtp_Button}>
        <Button className={styles.GetBTN} onClick={() => getStarted()}>
          Get Started
        </Button>
        <Button
          className={styles.GoBack_Button}
          onClick={() => login_Mode_Handler('ResetPassword')}
          type='submit'
        >
          Go Back
        </Button>
      </div>
      <div className={styles.ForgotPasswordOtp_Bottom}>
        <a>
          Didn't receive code? <b style={{ color: '#0000EE' }}>Resend code</b>
        </a>
      </div>
    </form>
  );
};

export default ForgotPasswordOtp;
