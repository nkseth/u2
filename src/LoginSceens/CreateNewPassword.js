import React, { useState } from 'react';
import styles from './style/CreateNewPassword.module.scss';
import { Button } from '@material-ui/core';
import useLogin from './useLogin';
import { useSelector } from 'react-redux';
import common_axios from '../utils/axios.config';

const CreateNewPassword = () => {

  const { login_Model_Hide, login_Mode_Handler } = useLogin();
  const [oldPass, setOldPass] = useState('')
  const [newPass, setNewPass] = useState('');
  const { forgot_data } = useSelector(state => state.root.main)

  const handle_change = async () => {

    const password_regex = new RegExp(
      "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
    );

    const matchPassword = oldPass.match(password_regex);

    if (!matchPassword) {
      return alert(`Password must have min length 8 and have one of each:-\n
      Upper Case,
      Lower Case,
      Number,
      Special Character.`);
    }

    if (oldPass != newPass) {
      alert("Password doesn't match")
    }

    try {
      const params = forgot_data.type == 'email' ? { email: forgot_data.value, new_password: oldPass, otp: forgot_data.otp, slug: "email" } : { phone_no: forgot_data.value, new_password: oldPass, otp: forgot_data.otp, slug: "phone_no" }

      const { data } = await common_axios.post('/auth/reset', params)
      login_Mode_Handler("Login")
    } catch (e) {
      alert(e.respose?.data?.message)
    }


  }

  return (
    <form className={styles.CreateNewPassword}>
      <div className={styles.CreateNewPassword_Title}>
        <h1>Create New Password</h1>
        <p>Your new password must be different from old password</p>
      </div>{' '}
      <div className={styles.CreateNewPassword_Input}>
        <label>Password</label>
        <input value={oldPass} onChange={(e) => setOldPass(e.target.value)} type='password' placeholder='password' />
      </div>{' '}
      <div className={styles.CreateNewPassword_Input}>
        <label>Confirm Password</label>
        <input value={newPass} onChange={(e) => setNewPass(e.target.value)} type='password' placeholder='password' />
      </div>{' '}
      <div className={styles.CreateNewPassword_Button}>
        <Button className={styles.Create_Button} onClick={handle_change}>
          Reset Password
        </Button>
        <Button
          className={styles.GoBack_Button}
          onClick={() => login_Mode_Handler('ResetPassword')}
          type='submit'
        >
          Go Back
        </Button>
      </div>
    </form>
  );
};

export default CreateNewPassword;
