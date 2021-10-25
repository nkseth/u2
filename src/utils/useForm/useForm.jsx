import React, { useState } from 'react';

export default function useForm(defaults) {
  const [values, setValues] = useState(defaults);
  console.log('🚀 ~ file: useForm.jsx ~ line 5 ~ useForm ~ values', values);

  function updateValues(e) {
    let { value } = e.target;

    if (e.target.type === 'number') value = parseInt(e.target.value);
    setValues({
      ...values,
      [e.target.name]: value,
    });
  }
  return { values, updateValues };
}
