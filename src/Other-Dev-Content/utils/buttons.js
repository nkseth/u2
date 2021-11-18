import React from 'react';
import { Col ,Button} from 'antd';
import './comman.css'

export const Buttons = values => {
    switch (values.type) {
      case 'submit':
        return (
          <Col key={1} xs={24} xl={24}>
             <button type="submit" fluid attached='bottom' onClick={(()=>values.functionName)} className="btn commanButton">{values.name}</button>
          </Col>
        );
    }
};
