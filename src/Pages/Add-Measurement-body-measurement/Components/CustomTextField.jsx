import React, { useState } from 'react';
import styles from './CustomTextField.module.scss';
import {
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  useMediaQuery,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InputAdornment from '@material-ui/core/InputAdornment';
import './common.scss';
export default function CustomTextField({
  label,
  helperText,
  focused,
  Form,
  name,
  values,
}) {
  console.log('🚀 ~ file: CustomTextField.jsx ~ line 22 ~ focused', focused);
  const [Open, SetOpen] = useState(false);
  const Tab = useMediaQuery('(max-width:786px');

  const BringValue = input => {
    // console.log('value', input.target.value)
    Form(input.target.value, name);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div className={styles.container}>
        {/* <TextField
                    label={label}
                    InputLabelProps={{
                        style: {
                            color: "grey",
                            fontFamily: "DM Sans",
                            fontSize: "20px",
                            fontWeight: 400,
                            lineHeight: " 16px",
                            letterSpacing: "0.3199999928474426px",
                        },
                    }}
                    variant='standard'
                    fullWidth
                    helperText={helperText}
                    style={{ width: "100%", background: "white" }}
                    autoFocus={focus}
                    value={values}
                    onChange={BringValue}
                    type={'text'}
                /> */}
        <Accordion
          // onChange={() => { handleAccordionChange("neck"); FocusIt('neck') }}
          style={{
            boxShadow: 'none',
            marginTop: Tab ? 0 : -20,
            borderRadius: '5px 0',
            width: '100%',
            backgroundColor: '#fff',
            padding: 0,
          }}
          expanded={Open}
          // onChange={() => SetOpen(!Open)}
        >
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon onClick={() => SetOpen(!Open)} />}
            IconButtonProps={{ size: 'small' }}
            aria-controls='panel1a-content'
            id='panel1a-header'
            className={styles.accordionSummary}
          >
            <div style={{ position: 'relative' }}>
              <TextField
                // label={label}
                InputLabelProps={{
                  style: {
                    color: 'grey',
                    fontFamily: 'DM Sans',
                    fontSize: '20px',
                    fontWeight: 'bolder',
                    lineHeight: '16px',
                    letterSpacing: '0.3199999928474426px',
                    background: 'transparent',
                    padding: '0 0 0 .2em',
                  },
                }}
                // InputProps={{
                //   endAdornment: <InputAdornment>In</InputAdornment>,
                // }}
                // InputProps={{
                //   inputProps: {
                //     type: 'number',
                //     minlength: 0,
                //     maxLength: 6,
                //   },
                // }}
                inputProps={{ maxLength: 10 }}
                variant='standard'
                fullWidth
                // helperText={helperText}
                style={{
                  width: '100%',
                  background: 'transparent',
                  paddingLeft: '0.2em',
                  fontWeight: '700',
                  fontSize: '16px',
                }}
                autoFocus={true}
                value={values}
                onChange={BringValue}
                type={'number'}
              />

              <p
                style={{
                  position: 'absolute',
                  top: '3px',
                  fontSize: '1.2rem ',
                  left: `${label.length + 80}px`,
                  fontWeight: '700',
                  fontSize: '16px',
                }}
              >
                in
              </p>
            </div>
            <div>
              <p className={styles.accInfo}>
                Click the link below and watch the intruction video for
                Measurement
                <span>Video Link </span>
              </p>
            </div>
          </AccordionSummary>
          {/* <AccordionDetails
            style={{
              background: '#fff',
              display: 'flex',
              flexDirection: 'column',
              marginTop: Tab ? '-0.8em' : '0',
              padding: 0,
            }}
          > */}

          {/* </AccordionDetails> */}
        </Accordion>
      </div>
    </div>
  );
}
