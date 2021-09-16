import { FormControl, FormHelperText, InputLabel, makeStyles, NativeSelect, Select, useMediaQuery } from "@material-ui/core";
import { MenuItem } from "rc-menu";
import { useState } from "react";
import styles from "./inputField.module.scss";






const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));






export default function InputField({ label, placeholder, onChange, style, StatesName, notimp, textfield, IsState, special, value }) {
  const handleInputChange = (e) => {
    // if (onChange) {
    //   onChange(e);
    // }
    return (
      <div className={styles.container}>
      </div>
    );
  };





  const [State, SetState] = useState('State')
  const classes = useStyles();



  const handleChangeForState = (event) => {
    SetState(event.target.value,);
  };



  const BreakPointMobile = useMediaQuery("(max-width:560px)");




  return (
    <div className={styles.container}>
      {
        textfield ?


          <>
            <label className={styles.label}>
              {label}
              <span>{!notimp ? '*' : ''}</span>
            </label>
            <textarea
              style={style}
              className={styles.textarea}
              type='text'
              value={value}
              name={label}
              placeholder={placeholder}
              onChange={onChange}
            ></textarea>
          </>
          :
          IsState ?


            <div style={BreakPointMobile ? { marginTop: "-0.8em" } : { marginTop: "-1.5em" }} >
              <label className={styles.label} style={BreakPointMobile ? { marginBottom: "0.3em" } : { marginBottom: "0.5em" }}  >{label}</label>
              <FormControl className={styles.FormControl}
                style={{
                  border: "1px solid #6a5b40",
                  height: "48px",
                  display: "flex",
                  borderRadius: "5px",
                  padding: "15px"
                }}>
                <NativeSelect
                  disableUnderline
                  value={State}
                  name="age"
                  className={styles.NativeSelect}
                  onChange={handleChangeForState}
                  inputProps={{ 'aria-label': 'age' }}
                >
                  <option value="" disabled>
                    State
                  </option>
                  {StatesName.map((item) => {
                    return (
                      <option value={item.id}>{item}</option>
                    )
                  })}
                </NativeSelect>
              </FormControl>
            </div>
            :
            special ?


              <>

                <label className={styles.label}>
                  {label}
                  <span>{!notimp ? '*' : ''}</span>
                </label>
                <input
                  style={style}
                  className={styles.inputSpecial}
                  type='text'
                  name={label}
                  placeholder={placeholder}
                  onChange={onChange}
                />

              </>



              :

              <>

                <label className={styles.label}>
                  {label}
                  <span>{!notimp ? '*' : ''}</span>
                </label>
                <input
                  style={style}
                  className={styles.input}
                  type='text'
                  value={value}
                  name={label}
                  placeholder={placeholder}
                  onChange={onChange}
                />

              </>
      }
    </div>
  );
}
