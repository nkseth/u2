import React, { useState } from 'react';

export default function useForm(defaults) {
  const [values, setValues] = useState(defaults);

  function updateValues(e) {
    let { value } = e.target;

    if (e.target.type === 'number') value = parseInt(e.target.value);
    setValues({
      ...values,
      [e.target.name]: value,
    });
  }

  function resetValues() {
    setValues(defaults);
  }
  return { values, updateValues, resetValues };
}
