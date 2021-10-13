import React from 'react';
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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/styles';

const CheckboxComponents = ({
  styles,
  items,
  name,
  value: checkedValue,
  title,

  handleCheckBoxValues,
}) => {
  const CustomCheckbox = withStyles({
    root: {
      color: '#9D9D9D',
      '&$checked': {
        color: '#857250',
      },
    },
    checked: {},
  })(props => <Checkbox color='default' {...props} />);
  return (
    <Accordion className={styles.accordion}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        className={styles.accordionSummary}
      >
        <div className={styles.accordionSummaryInnerDiv}>
          <span>{title}</span>
          <span>{checkedValue}</span>
        </div>
      </AccordionSummary>
      <AccordionDetails className={styles.accordionDetials}>
        {items?.map(({ value, attr_value_id, attribute_id }) => (
          <FormControlLabel
            control={<CustomCheckbox />}
            onChange={e => {
              const item = {
                attributeValue_id: attr_value_id,
                attribute_id: attribute_id,
                value: e.target.value,
              };
              handleCheckBoxValues(e, name, item);
            }}
            value={value}
            label={<p className={styles.radioBtnsLabels}>{value}</p>}
          />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default CheckboxComponents;
