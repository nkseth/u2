import React from 'react';
import { Col } from 'antd';
import { Field } from 'formik';
import { Form, Input, InputNumber, Checkbox ,DatePicker} from 'formik-antd'
import NumberFormat from 'react-number-format';
import { Dropdown } from 'semantic-ui-react'
import './comman.css'

const friendOptions = [
    {
        key: 'Jenny Hess',
        text: 'Jenny Hess',
        value: 'Jenny Hess',
        image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },
    {
        key: 'Elliot Fu',
        text: 'Elliot Fu',
        value: 'Elliot Fu',
        image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
    },
    {
        key: 'Stevie Feliciano',
        text: 'Stevie Feliciano',
        value: 'Stevie Feliciano',
        image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
    },
    {
        key: 'Christian',
        text: 'Christian',
        value: 'Christian',
        image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
    },
    {
        key: 'Matt',
        text: 'Matt',
        value: 'Matt',
        image: { avatar: true, src: '/images/avatar/small/matt.jpg' },
    },
    {
        key: 'Justen Kitsune',
        text: 'Justen Kitsune',
        value: 'Justen Kitsune',
        image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
    },
]

export const generateForm = (formField,errors) => {
  return formField?.map((values, index) => {
    switch (values.type) {
      case 'text':
        return (
          <Col key={index} xs={24} xl={24}>
            <label>{values.label}</label>
            <p>
              <Field disabled={values.isdisable} className='form-control allForm'  name={values.name} placeholder={values.label} type="text"></Field>
              <span className="text-danger">{errors[values.name]}</span>
            </p>
          </Col>
        );
      case 'email':
        return (
          <Col key={index} xs={24} xl={24}>
            <label>{values.label}</label>
            <p>
              <Field  name={values.name} disabled={values.isdisable} className='form-control allForm' placeholder={values.label} type="email"></Field>
              <span className="text-danger">{errors[values.name]}</span>
            </p>
          </Col>
        );
      case 'phone':
        
        return (
          <Col key={index} xs={24} xl={24}>
            <label>{values.label}</label>
            <p>
              <NumberFormat  
                allowEmptyFormatting
                customInput={Input}
                format="+91 (###) ###-####" mask="_"
                required={true}
                type='phone'
                className='form-control allForm'
                name={values.name}
                />
            <span className="text-danger">{errors[values.name]}</span>
            </p>
          </Col>
        );  
      case 'password':
        return (
          <Col key={index} xs={24} xl={24}>
            <label>{values.label}</label>
            <p>
              <Field                
                name={values.name}
                placeholder=""
                type="password"
                autoComplete="off"
                disabled={values.isdisable}
                placeholder={values.label}
                className='form-control allForm' 
              >
                
              </Field>
              <span className="text-danger">{errors[values.name]}</span>
            </p>
          </Col>
        );
      case 'select':
        return (
          <Col key={index} xs={24} xl={24}>
            <label>{values.label}</label>
            <p>
              <Field name={values.name} placeholder="" type="text">
                  <Dropdown
                      placeholder='Select Friend'
                      fluid
                      selection
                      options={friendOptions}
                  />
              </Field>
            </p>
          </Col>
        );
      case 'datepicker':
        return (
          <Col key={index} xs={24} xl={24}>
            <label>{values.label}</label>
            <p>
              <Field  name={values.name} className='form-control allForm' placeholder={values.label} type="date"></Field>
              <span className="text-danger">{errors[values.name]}</span>

            </p>
          </Col>
        );
        
    }
  });
};
